import { readFile, writeFile } from "fs/promises"
import { existsSync } from "node:fs"
import { nanoid } from "nanoid"
import { Cart } from "@/data/types"

const PATH = "./carts.json"

export const createCart = (): Cart => ({
  id: nanoid(),
  books: [],
})

export const getOrCreateCart = async (cartId?: string) => {
  let cart = await getCart(cartId)

  if (!cart) {
    const carts = await getCarts()
    const newCart = createCart()
    await saveCarts([...carts, newCart])
    return newCart
  }

  return cart
}
export const getCarts = async () => {
  if (existsSync(PATH)) {
    return JSON.parse(await readFile(PATH, "utf8")) as Cart[]
  }
  return []
}

export const saveCarts = async (carts: Cart[]) =>
  writeFile(PATH, JSON.stringify(carts))

export const saveCart = async (cart: Cart) => {
  const carts = await getCarts()
  await writeFile(
    PATH,
    JSON.stringify(carts.filter(({ id }) => id !== cart.id).concat(cart))
  )
}

export const getCart = async (cartId?: string) => {
  if (existsSync(PATH)) {
    const carts = JSON.parse(await readFile(PATH, "utf8")) as Cart[]
    return carts.find((cart) => cart.id === cartId) || null
  }
  return null
}

export const updateCart = async (cart: Cart) => {
  await saveCart(cart)
  return cart
}
