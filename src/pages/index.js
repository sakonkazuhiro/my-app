import styles from '../styles/Home.module.css'
import Main from '../components/Main'  // Mainコンポーネントをインポート

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />  {/* Mainコンポーネントを表示 */}
      <div className={styles.infoSection}>
        <img src="/images/Vector 20.svg" alt="Logo" className={styles.logo} />
        <span className={styles.text}>運営会社・ReAliceについて</span>
        <p className={styles.description}>
          ReAlice Lab（仮）は、サービスのプレゼンスをあげるためにAIの力を最大限に活かし、
          過去実績から培った知見と高度な技術力で、クリエイティブなAI体験を実現する開発チームを提供します。
        </p>
      </div>
    </div>
  )
}