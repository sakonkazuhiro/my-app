import styles from '../styles/Home.module.css'
import Main from '../components/Main'  // Mainコンポーネントをインポート

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />  {/* Mainコンポーネントを表示 */}
    </div>
  );
}