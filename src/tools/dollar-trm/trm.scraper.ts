import axios from 'axios'
import * as cheerio from 'cheerio'

export class TRMScraper {

  static async getTRM() {

    const res = await axios.get(
      "https://www.dolar-colombia.com/"
    )

    const $ = cheerio.load(res.data)

    const price = $(".exchange-rate").first().text().trim()

    if (!price) {
      throw new Error("No se pudo obtener la TRM")
    }

    return price

  }

}