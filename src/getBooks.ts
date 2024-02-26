import { Book } from "@/data/types"
import { getAllCookiesAsString } from "@/getAllCookiesAsString"

export const getBooks = async () => {
  return fetch(`${process.env.API_URL}/books`, {
    headers: {
      Cookie: getAllCookiesAsString(),
    },
  }).then((res) => res.json() as Promise<Book[]>)
}
