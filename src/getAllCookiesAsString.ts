import { cookies } from "next/headers"

export const getAllCookiesAsString = () =>
  cookies()
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join(";")
