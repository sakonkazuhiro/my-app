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

    return (
        <div className={styles.mainContainer}>
            <div className={styles.topGradientContainer}></div>
            <div className={styles.blurContainer}></div>
            <p className={styles.descriptionText}>
                ReAlice Lab（仮）は、サービスのプレゼンスをあげるためにAIの力を最大限に活かし、<br />
                過去実績から培った知見と高度な技術力で、クリエイティブなAI体験を実現する開発チーム<br />
                を提供します。
            </p>
            <div className={styles.companyLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 8 14" fill="none">
                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="1"/>
                </svg>
                運営会社・ReAliceについて
            </div>
            <div className={styles.iconContainer}>
                <img src="/images/Vector 20.svg" alt="アイコン" className={styles.icon} />
            </div>
            <img 
                src="/images/logo.svg" 
                alt="ReAlice Logo" 
                className={styles.headerLogo} 
            />
            <nav className={styles.headerNav}>
                {menuItems.map((item, index) => (
                    <div className={styles.navItem} key={index}>
                        <span className={styles.navTitle}>{item.title}</span>
                        <span className={styles.navSubtitle}>{item.subtitle}</span>
                    </div>
                ))}
            </nav>

            <div className={styles.mainVisual}>
                <h1 className={styles.mainTitle}>
                    AI Technology<br />
                    for Unleashing<br />
                    Creativity
                </h1>
                <p className={styles.mainSubtitle}>
                    創造力を引き出すAIテクノロジー
                </p>
            </div>

            <Main1 />
        </div>
    );
};

export default Main;
