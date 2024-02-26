import { Cart } from "@/data/types"
import { getAllCookiesAsString } from "@/getAllCookiesAsString"

export type UpdateCartRequest = {
  id: string
  books: string[]
}
export const updateCart = async (request: UpdateCartRequest) => {
  return fetch(`${process.env.API_URL}/cart`, {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      Cookie: getAllCookiesAsString(),
    },
  }).then((res) => res.json() as Promise<Cart>)
}
