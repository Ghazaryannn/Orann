import React from 'react'
import { snacks } from '@/db'
import Image from 'next/image'
import Link from 'next/link';
import { GrFormPrevious } from "react-icons/gr";
import styles from './page.module.css'

const Snacks = () => {
  return (
    <div className={styles.snacks}>
        <Link href='/Menu'><p className={styles.prew}><span><GrFormPrevious /></span>Ուտեստներ</p></Link>
            {
                snacks.map((prod) => {
                    return (
                        <div className={styles.snack_card} key={prod.id}>
                        <Image width={300} height={200} src={prod.image} alt='img'/>
                        <h2>{prod.name}</h2>
                        <p>{prod.size}</p>
                        <b>{prod.price}</b>
                    </div>
                    )
                })
            }
    </div>
  )
}

export default Snacks