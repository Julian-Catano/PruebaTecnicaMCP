import { Module } from '@nestjs/common'
import { WhatsappController } from './whatsapp/whatsapp.controller'
import { WhatsappService } from './whatsapp/whatsapp.service'
import { MCPService } from './mcp/mcp.service'
import { AiService } from './ai/ai.service'
import { ToolRegistry } from './ai/tool.registry'
import { TRMTool } from './tools/dollar-trm/trm.tool'
import { PrismaService } from './database/prisma.service'

@Module({
  controllers: [WhatsappController],
  providers: [
    WhatsappService,
    MCPService,
    AiService,
    ToolRegistry,
    TRMTool,
    PrismaService
  ],
})
export class AppModule {}