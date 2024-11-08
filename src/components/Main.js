import React from 'react';
import styles from '../styles/Main.module.css';

const Main = () => {
    return (
        <main>
            {/* 背景画像（非表示） */}           
             <div className={styles.leftContainer}>
                <div className={styles.imageTop}>
                    <img src="/images/logo.svg" alt="Top Image" className={styles.topImage} />
                </div>
                <div className={styles.imageBottom}>
                    <img src="/images/mein.png" alt="Bottom Image" className={styles.bottomImage} />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.imageContainer}>
                    <img src="/images/huaki.png" alt="Background" className={styles.backgroundImage} />
                    <div className={styles.textOverlay}>
 {/* メインテキスト */}
 <h1 className={styles.backgroundImageText}>
                AI Technology<br />or Unleashing<br />Creativity
            </h1>

            {/* サブテキスト */}
            <p className={styles.subText}>創造力を引き出すAIテクノロジー</p></div>{/* クラス名を修正 */}
           <div className={styles.container}>
    <p className={styles.description}>ReAlice Lab（仮）は、サービスのプレゼンスをあげるためにAIの力を最大限に活かし、過去実績から培った知見と高度な技術力で、クリエイティブなAI体験を実現する開発チームを提供します。</p>
    <div className={styles.logoContainer}>
        <img src="/images/Vector 20.svg" alt="Logo" className={styles.logo} />
        <span className={styles.text}>運営会社・ReAliceについて</span>
    </div>
</div>
                </div>
            </div>
            <div className={styles.hiddenBackground}></div>

            <div className={styles.menu}>
                <div className={styles.menuItem}>menu</div>
                <div className={styles.menuItem}>menu</div>
                <div className={styles.menuItem}>menu</div>
                <div className={styles.menuItem}>menu</div>
                <div className={styles.menuItem}>contact</div>
            </div>
        </main>
        
    );
};

export default Main;
