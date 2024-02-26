"use client"

import { Cart } from "@/data/types"
import { updateCart } from "@/BookList/actions"

type Props = {
  bookId: string
  cart: Cart | null
}
export const UpdateCartButton = ({ cart, bookId }: Props) => {
  const isInCart = Boolean(cart && cart.books.find((id) => id === bookId))
  const booksAtCart = cart ? cart.books : []
  const newBooks = isInCart
    ? booksAtCart.filter((id) => id !== bookId)
    : [...booksAtCart, bookId]

  return (
    <button
      onClick={async () => {
        await updateCart.bind(null, newBooks)()
      }}
    >
      {isInCart ? "Remove" : "Add"}
    </button>
  )
}
