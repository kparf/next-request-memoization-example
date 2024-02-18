import { nanoid } from "nanoid"

export type Book = {
  id: string
  name: string
}

const books: Book[] = [{
  id: "1",
  name: "Book 1"
}, {
  id: "2",
  name: "Book 2"
}, {
  id: "3",
  name: "Book 3"
}, 
{
  id: "3",
  name: "Book 3"
}]

export async function GET() {
  return Response.json(books)
}