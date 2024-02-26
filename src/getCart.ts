import { Cart } from "@/data/types"
import { getAllCookiesAsString } from "@/getAllCookiesAsString"

export const getCart = async (info?: string) => {
  console.log("getCart", info)

  return fetch(`${process.env.API_URL}/cart`, {
    headers: {
      Cookie: getAllCookiesAsString(),
    },
  }).then((res) => res.json() as Promise<Cart | null>)
}
