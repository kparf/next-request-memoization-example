import { cookies } from "next/headers"
import { updateCart, getCart } from "@/data/carts"

type UpdateCartRequestBody = {
  books: string[]
}
export async function PUT(request: Request) {
  const { value: cartId } = cookies().get("cart") || {}

  const { books } = (await request.json()) as UpdateCartRequestBody

  if (cartId) {
    const newCart = await updateCart({
      id: cartId,
      books,
    })

    return new Response(JSON.stringify(newCart), {
      status: 200,
    })
  }

  return new Response("Cart not found", {
    status: 400,
  })
}

export async function GET() {
  console.log("GET cart route")
  const { value: cartId } = cookies().get("cart") || {}
  const cart = await getCart(cartId)

  return Response.json(cart)
}
