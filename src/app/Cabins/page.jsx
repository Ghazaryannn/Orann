import React from 'react'
import img1 from '../../../public/kupe1.jpg'
import img2 from '../../../public/kupe2.jpg'
import img3 from '../../../public/kupe3.jpg'
import img4 from '../../../public/kupe4.jpg'
import img5 from '../../../public/kupe5.jpeg'
import img6 from '../../../public/kupe6.jpg'
import img7 from '../../../public/kupe7.jpg'
import Image from 'next/image'
import styles from './paje.module.css'

const Cabins = () => {
  return (
    <div className={styles.cabins}>
        <div className={styles.grid_wrapper}>
                <div className={styles.big} >
                    <Image src={img7} alt="img" className={styles.grid_img} />
                </div>
                <div className={styles.wide}>
                    <Image src={img6} alt="img" className={styles.grid_img} />
                </div>
                <div className={styles.tall}>
                    <Image src={img4} alt="img" className={styles.grid_img} />
                </div>
                <div className={styles.tall}>
                    <Image src={img5} alt="img" className={styles.grid_img} />
                </div>
                <div className={styles.wide}>
                    <Image src={img3} alt="img" className={styles.grid_img} />
                </div>
                <div className=''>
                    <Image src={img1} alt="img" className={styles.grid_img} />
                </div>
                <div className=''>
                    <Image src={img2} alt="img" className={styles.grid_img} />
                </div>
            </div>
    </div>
  )
}

export default Cabins