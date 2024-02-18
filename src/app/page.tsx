import { Suspense } from "react"
import styles from "./page.module.css";
import { BookList } from "./BookList/BookList"

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<div>Looding...</div>} >
        <BookList />
      </Suspense>
    </main>
  );
}
