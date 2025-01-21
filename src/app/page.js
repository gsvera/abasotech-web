import Image from "next/image";
import styles from "./page.module.css";
import { GiSwordsPower } from "react-icons/gi";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <GiSwordsPower style={{ fontSize: 100 }} />
        <h1>Abasotech</h1>
      </main>
    </div>
  );
}
