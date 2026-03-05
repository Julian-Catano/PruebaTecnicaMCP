import { Injectable } from '@nestjs/common'
import { Tool } from '../../mcp/tool.interface'
import { TRMScraper } from './trm.scraper'

@Injectable()
export class TRMTool implements Tool{

 name = "get_trm"

 description = "Obtiene la TRM actual"

 async execute(){

   const price = await TRMScraper.getTRM()

   return `💵 La TRM actual es: ${price}`

 }

}