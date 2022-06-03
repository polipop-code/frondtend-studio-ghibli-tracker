import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <Link href="/login">
      <a>
        <div className={styles.btn_container}>
          <button className={styles.footer_btn}>Suscribe!</button>
        </div>
      </a>
    </Link>
  )
}

export default Footer