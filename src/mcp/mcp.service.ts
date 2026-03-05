import { Injectable } from '@nestjs/common'
import { AiService } from '../ai/ai.service'
import { ToolRegistry } from '../ai/tool.registry'

@Injectable()
export class MCPService {

 constructor(
  private aiService: AiService,
  private toolRegistry: ToolRegistry
 ){}

 async process(message:string){

  const decision = await this.aiService.detectIntent(message)

  if(!decision.tool){
   return decision.response
  }

  const tool = this.toolRegistry.getTool(decision.tool)

  if (!tool){
    console.log("nO SE ENCONTRO NINGUNA TOOL")
    return null
  } 
  const  result = await tool.execute(decision.params)

  return result

 }

}