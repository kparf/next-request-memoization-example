import { Card } from "../route"

type Params = {
  id: string
}
const cards: Card[] = []

type UpdateCardBody = {
  books: string[]
}
export async function PUT(request: Request, { params }: { params: Params } ) {
  const body = await request.json() as UpdateCardBody
  
  const card = cards.find(card => card.id === params.id)

  if (card) {
    card.books = body.books
    return card 
  }
}