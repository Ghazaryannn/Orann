import Cards from "@/components/Cards";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bc_main}>
        <div className={styles.welcome}>
          <h1>Բարի գալուստ <br /> <span>Օրրան</span></h1>
          <button className={styles.btn}>Մեր մենյուն</button>
        </div>
      </div>
      <Cards />
    </main>
  );
}
