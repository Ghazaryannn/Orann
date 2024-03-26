import React from 'react'
import styles from './page.module.css'

const Menu = () => {
  return (
    <div className={styles.menu}>
        <div className={styles.menu_header}>
            <p>Ուտեստներ</p>
            <p>Ըմպելիքներ</p>
        </div>
        <div className={styles.appetizer}>
            <h2>Նախաուտեստներ</h2>
        </div>
        <div className={styles.grilled}>
            <h2>Թոնրի խորոված</h2>
        </div>
    </div>
  )
}

export default Menu