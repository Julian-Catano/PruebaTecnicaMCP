import { Module } from "@nestjs/common"
import { WhatsappController } from "./whatsapp.controller"
import { WhatsappService } from "./whatsapp.service"
import { MCPService } from "../mcp/mcp.service"
import { PrismaModule } from "../database/prisma.module"

@Module({
  imports: [PrismaModule],
  controllers: [WhatsappController],
  providers: [WhatsappService, MCPService],
})
export class WhatsappModule {}