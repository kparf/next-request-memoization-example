import { Book } from "../api/books/route"


const getBooks = async () => fetch(`${process.env.API_URL}/books`).then((res) => res.json() as Promise<Book[]>)

export const BookList = async () => {
  const books = await getBooks()

  return <ul>
    <h1>Books</h1>
    {books.map(book => (<li key={book.id}>
      {book.name}
    </li>))}
  </ul>
}