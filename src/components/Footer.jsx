import React from 'react'
import Image from 'next/image';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import img from '../../public/logo.png'
import Link from 'next/link';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <p className={styles.about}>
          <span> About the restaurant</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
          ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
        <div className={styles.icons}>
          <a href=""><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
        </div>
      </div>
      <div className={styles.footer_right}>
        <Image src={img} alt="logo"  width={200}/>
        <div className={styles.menu}>
          <ul>
           <li> <Link href='/Menu'>Մենյու</Link></li>
          </ul>
        </div>
        <p className={styles.name}> Orran &copy; 2024</p>
      </div>
    </footer>
  )
}

export default Footer