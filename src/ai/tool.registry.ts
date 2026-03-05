import { Injectable } from '@nestjs/common'
import { Tool } from '../mcp/tool.interface'
import { TRMTool } from '../tools/dollar-trm/trm.tool'

@Injectable()
export class ToolRegistry {

 private tools = new Map<string, Tool>()

 constructor(
  private trmTool: TRMTool
 ){
   this.register(this.trmTool)
 }

 register(tool:Tool){
  this.tools.set(tool.name, tool)
 }

 getTool(name:string){
  return this.tools.get(name)
 }

}