import React from 'react';
import styles from '../styles/Main.module.css';
import Main1 from './Main1';

const Main = () => {
    const menuItems = [
        { title: 'TOP', subtitle: 'トップへ' },
        { title: 'Service', subtitle: 'サービス' },
        { title: 'Flow', subtitle: '開発フロー' },
        { title: 'Works', subtitle: '開発事例' },
        { title: 'Contact', subtitle: 'お問い合わせ' }
    ];

    const text1 = () => (
        <p className={styles.text1}>
            ReAlice Lab（仮）は、サービスのプレゼンスをあげるためにAIの力を最大限に活かし、
            過去実績から培った知見と高度な技術力で、クリエイティブなAI体験を実現する開発チームを提供します。
        </p>
    );

    const text2 = () => (
        <span className={styles.text2} style={{ display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 8 14" fill="none" style={{ marginRight: '5px' }}>
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="1" />
            </svg>
            運営会社・ReAliceについて
        </span>
    );

    return (
        <main className={styles.mainContainer}>
            <img 
                src="/images/logo.svg" 
                alt="ReAlice Logo" 
                className={styles.logoImage}
                style={{ 
                    position: 'absolute',
                    top: '44px',
                    left: '62px',
                    width: '140px',
                    height: '28px',
                    flexShrink: 0
                }}
            />

            <nav className={styles.navigationContainer}>
                {menuItems.map((item, index) => (
                    <div key={index} className={styles.menuItem}>
                        <span className={styles.menuTitle}>{item.title}</span>
                        <span className={styles.menuSubtitle}>{item.subtitle}</span>
                    </div>
                ))}
            </nav>

            <h1 className={styles.textWithImageMask}>
                AI Technology<br />
                for Unleashing<br />
                Creativity
            </h1>

            <h1 className={styles.textOverlay}>
                AI Technology<br />
                for Unleashing<br />
                Creativity
            </h1>

            <p className={styles.japaneseText}>
                創造力を引き出すAIテクノロジー
            </p>

            <div className={styles.imageWrapper}>    
            <div className={styles.backgroundMask}>
                    <div className={styles.visibleArea}></div>
                </div>
            </div>

            <div className={styles.transparentContainer}>
                {text2()}
                {text1()}
            </div>

            <div className={styles.footerContainer}>
                {/* ここにテキストコンテンツを追加予定 */}
            </div>

            <Main1 />
        </main>
    );
};

export default Main;
