import React from 'react'
import { FaHome } from "react-icons/fa";
import { TbBuildingCottage } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import styles from './Cards.module.css'
import Link from 'next/link';

const Cards = () => {
    return (
        <div className={styles.cards_main}>
            <div className={styles.card}>
            <FaHome className={styles.home} />
                <h3>Փայտե <span>տնակներ</span></h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio illum quam fugiat veritatis odit. Eaque, animi enim, error libero odit alias, in repellendus sapiente neque dolor repudiandae adipisci blanditiis perspiciatis?</p>
                <Link href='/Cabins'><button className={styles.btnn}>Տեսնել</button></Link>
            </div>
            <div className={styles.card}>
                <TbBuildingCottage className={styles.home} />
                <h3>Հարմարավետ <span>քոթեջներ</span></h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio illum quam fugiat veritatis odit. Eaque, animi enim, error libero odit alias, in repellendus sapiente neque dolor repudiandae adipisci blanditiis perspiciatis?</p>
                <Link href='/Cottage'><button className={styles.btnn}>Տեսնել</button></Link>
            </div>
            <div className={styles.card}>
                <LuPartyPopper className={styles.party} />
                <h3>Հանդիսությունների <span>սրահ</span></h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio illum quam fugiat veritatis odit. Eaque, animi enim, error libero odit alias, in repellendus sapiente neque dolor repudiandae adipisci blanditiis perspiciatis?</p>
                <Link href='/Banquet'><button className={styles.btnn}>Տեսնել</button></Link>
            </div>
        </div>
    )
}

export default Cards