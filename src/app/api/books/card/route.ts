import { nanoid } from "nanoid"

export type Card = {
  id: string
  books: string[]
}

const cards: Card[] = []

const createCard = (): Card => ({
  id: nanoid(),
  books: []
})

export async function POST(request: Request) {
  const newCard = createCard()
  cards.push(newCard)

  return new Response(JSON.stringify(newCard), {
    status: 200,
  })
}