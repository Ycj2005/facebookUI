import styles from './login.module.scss'
import ConnectionDB from '@/DB/Connection'
import Homepage from './Home/page';
ConnectionDB();

export default function Home() {
  return (
    <main className={styles.main}>
      <Homepage/>
    </main>
  )
}
