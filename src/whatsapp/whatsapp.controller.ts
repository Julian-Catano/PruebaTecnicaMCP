import { Controller, Post, Body, Get, Query } from '@nestjs/common'
import { WhatsappService } from './whatsapp.service'
import { MCPService } from '../mcp/mcp.service'
import { PrismaService } from '../database/prisma.service'

@Controller('whatsapp')
export class WhatsappController {

  constructor(
    private whatsappService: WhatsappService,
    private mcpService: MCPService,
    private prisma: PrismaService
  ) { }

  @Get('webhook')
  verify(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string
  ) {

    if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN) {
      return challenge
    }

    return "Token incorrecto"
  }

  @Post('webhook')
  async receiveMessage(@Body() body: any) {

    await this.prisma.webhookLog.create({
      data: {
        payload: JSON.stringify(body)
      }
    })

    const message = this.whatsappService.extractMessage(body)

    if (!message) return

    const phone = message.from
    const text = message.text

    const user = await this.prisma.user.upsert({
      where: { phone },
      update: {},
      create: { phone }
    })

    await this.prisma.message.create({
      data: {
        text,
        fromUser: true,
        userId: user.id
      }
    })


    const response = await this.mcpService.process(message.text)

    await this.prisma.message.create({
      data: {
        text: response,
        fromUser: false,
        userId: user.id
      }
    })


    await this.whatsappService.sendMessage(
      message.from,
      response
    )

    return "ok"


  }

}