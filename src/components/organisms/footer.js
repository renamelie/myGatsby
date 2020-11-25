import React from "react"

import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}, Designed & Built by
      {` `}
      <a href="https://renamelie.com">Ren Amélie</a>
    </footer>
  )
}

export default Footer
