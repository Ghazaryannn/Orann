'use client'
import React, { useState } from 'react'
import { FloatButton } from 'antd';
import Link from 'next/link';
import styles from './page.module.css'

const Menu = () => {
    const [foods, setFoods] = useState(true)
    const [drinks, setDrinks] = useState(false)
    const foo = () => {
        setFoods(true)
        setDrinks(false)
    }
    const fooo = () => {
        setFoods(false)
        setDrinks(true)
    }
    return (
        <div className={styles.menu}>
            <div className={styles.menu_header}>
                <p onClick={foo} className={foods ? styles.active : ''}>Ուտեստներ</p>
                <p onClick={fooo} className={drinks ? styles.active : ''}>Ըմպելիքներ</p>
            </div>
            {
                foods ?
                    <div className={styles.foods}>
                        <Link href='/Snacks'>
                        <div className={styles.appetizer}>
                                <h2>Նախաուտեստներ</h2>
                            </div>
                        </Link>
                        <div className={styles.grilled}>
                            <h2>Թոնրի խորոված</h2>
                        </div>
                        <div className={styles.hotdish}>
                            <h2>Տաք ուտեստներ</h2>
                        </div>
                        <div className={styles.salate}>
                            <h2>Աղցաներ</h2>
                        </div>
                        <div className={styles.cans}>
                            <h2>Պահածոներ</h2>
                        </div>
                        <div className={styles.souse}>
                            <h2>Սննդային հավելումներ</h2>
                        </div>
                        <div className={styles.pasta}>
                            <h2>Պաստաներ</h2>
                        </div>
                    </div> : ''
            }
            {
                drinks ?
                    <div className={styles.drinks}>
                        <div className={styles.drink}>
                            <h2>Զովացուցիչ ըմպելիքներ</h2>
                        </div>
                        <div className={styles.wine}>
                            <h2>Գինի</h2>
                        </div>
                        <div className={styles.vodka}>
                            <h2>Օղի</h2>
                        </div>
                        <div className={styles.konyak}>
                            <h2>Կոնյակ</h2>
                        </div>
                        <div className={styles.piva}>
                            <h2>Գարեջուր</h2>
                        </div>

                    </div> : ''
            }


            <FloatButton.BackTop />
        </div>
    )
}

export default Menu