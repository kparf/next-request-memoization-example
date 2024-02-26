"use server"
import { updateCart as update } from "@/updateCart"
import { cookies } from "next/headers"
import { getOrCreateCart } from "@/data/carts"

export const updateCart = async (books: string[]) => {
  const { value: cartId } = cookies().get("cart") || {}

  const cart = await getOrCreateCart(cartId)
  cookies().set("cart", cart.id)

  return update({
    id: cart.id,
    books,
  })
}
