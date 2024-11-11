import React from 'react';
import styles from '../styles/Main.module.css';

const Main = () => {
    const menuItems = [
        { title: 'TOP', subtitle: 'トップへ' },
        { title: 'Service', subtitle: 'サービス' },
        { title: 'Flow', subtitle: '開発フロー' },
        { title: 'Works', subtitle: '開発事例' },
        { title: 'Contact', subtitle: 'お問い合わせ' }
    ];

    return (
        <main className={styles.mainContainer}>
            <img 
                src="/images/logo.svg" 
                alt="ReAlice Logo" 
                className={styles.logoImage}
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
                <img 
                    src="/images/mailb.png" 
                    alt="Background" 
                    style={{
                        position: 'absolute',
                        top: '72px',
                        right: '646px',
                        left: '184px',
                        width: '406.737px',
                        height: '765.771px',
                        flexShrink: 0,
                    }}
                />
                <div className={styles.backgroundMask}>
                    <div className={styles.visibleArea}></div>
                </div>
            </div>

            <div className={styles.footerContainer}>
                {/* ここにテキストコンテンツを追加予定 */}
            </div>
        </main>
    );
};

export default Main;
