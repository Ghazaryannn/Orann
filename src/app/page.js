import Cards from "@/components/Cards";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bc_main}>
        <div className={styles.welcome}>
          <h1>Բարի գալուստ <br /> <span>Օրրան</span></h1>
          <Link href='/Menu'><button className={styles.btn}>Մեր մենյուն</button></Link>
        </div>
      </div>
      <Cards />
    </main>
  );
}
