import { Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class WhatsappService {

  extractMessage(body: any) {

    const entry = body.entry?.[0]
    const changes = entry?.changes?.[0]
    const message = changes?.value?.messages?.[0]

    if (!message) return null

    return {
      from: message.from,
      text: message.text.body
    }
  }

  async sendMessage(to: string, text: string) {

    await axios.post(
      `https://graph.facebook.com/v18.0/${process.env.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        text: { body: text }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    )

  }

}