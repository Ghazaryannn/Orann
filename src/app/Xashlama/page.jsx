'use client'

import React from 'react'
import { FloatButton } from 'antd';
import { Xashlama } from '@/db'
import Image from 'next/image'
import styles from './page.module.css'

const Xashlamaa = () => {
  return (
    <div className={styles.xashlama}>
    {
          Xashlama.map((prod) => {
            return (
                <div className={styles.xashlama_card} key={prod.id}>
                <Image width={300} height={200} src={prod.image} alt='img'/>
                <h2>{prod.name}</h2>
                <p>{prod.size}</p>
                <b>{prod.price}</b>
            </div>
            )
        })
    
    }
          <FloatButton.BackTop />
  </div>
  )
}

export default Xashlamaa