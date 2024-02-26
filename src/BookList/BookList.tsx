import { getBooks } from "@/getBooks"
import { getCart } from "@/getCart"
import { UpdateCartButton } from "@/BookList/UpdateCartButton"

export const BookList = async () => {
  const books = await getBooks()
  const cart = await getCart("(BookList)")

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.name} <UpdateCartButton cart={cart} bookId={book.id} />
        </li>
      ))}
    </ul>
  )
}
