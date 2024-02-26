import styles from "./styles.module.css"
import { getCart } from "@/getCart"

export const Header = async () => {
  const cart = await getCart("(Header)")

  return (
    <header className={styles.Header}>
      <h1>Books</h1>
      <div>Cart: {cart?.books.length || 0}</div>
    </header>
  )
}
