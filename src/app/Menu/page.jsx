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
        <div className={styles.hotdish}>
            <h2>Տաք ուտեստներ</h2>
        </div>
        <div className={styles.salate}>
            <h2>Աղցաններ</h2>
        </div>
        <div className={styles.cans}>
            <h2>Պահածոններ</h2>
        </div>
        <div className={styles.souse}>
            <h2>Սննդային հավելումներ</h2>
        </div>
        <div className={styles.pasta}>
            <h2>Պաստաներ</h2>
        </div>
    </div>
  )
}

export default Menu