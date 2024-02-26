import { Suspense } from "react"
import styles from "./page.module.css"
import { BookList } from "@/BookList/BookList"

const wait = (delay: number) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delay)
  })

export default async function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<div>Looding...</div>}>
        <BookList />
      </Suspense>
    </main>
  )
}
