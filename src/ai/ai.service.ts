import { Injectable } from '@nestjs/common'
import OpenAI from 'openai'

@Injectable()
export class AiService {

 private openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY
 })

 async detectIntent(message:string){

  const prompt = `
Decide que herramienta usar.

Tools disponibles:

get_trm -> obtener precio del dolar en Colombia

Devuelve JSON:

{
 "tool":"nombre_tool | null",
 "params":{},
 "response":"respuesta si no necesita tool"
}

Usuario:
${message}
`
if(message.toLowerCase().includes("dolar")){
   return {
     tool: "get_trm",
     params: {},
     response: null
   }
 }

 const response = await this.openai.chat.completions.create({
   model: "gpt-image-1",
   messages: [{role:"user", content:prompt}]
 })

 const text = response.choices[0].message.content || "kjul"

 try{
  return JSON.parse(text)
}catch{
  return {
    tool:null,
    params:{},
    response:text
  }

 }
}

}