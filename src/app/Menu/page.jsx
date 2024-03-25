import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const Menu = () => {
  return (
    <div className={styles.menu}>
         <div className={styles.menu_header}>
            <p>Ուտեստներ</p>
            <p>Հյութեր և Ըմպելիքներ</p>
         </div>
         <div className={styles.menu_center}>
            <div className={styles.prod}>
            </div>
         </div>
    </div>
  )
}

export default Menu