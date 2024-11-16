import React from 'react';
import styles from '../styles/Main.module.css';
import Main1 from './Main1';
import Main2 from './Main2';
import Flow from './Flow';
import main1Styles from '../styles/Main1.module.css';
import main2Styles from '../styles/Main2.module.css';
import flowStyles from '../styles/Flow.module.css';

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

            <img src="/images/logo.svg" alt="ReAlice Logo" className={styles.headerLogo} />
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
            <Main2 />
            <Flow />

            <div className={styles.blurContainer}>
                <div className={styles.companyText}>運営会社・ReAliceについて</div>
                <img 
                    src="/images/Vector 20.svg" 
                    alt="アイコン" 
                    className={styles.companyIcon} 
                />
            </div>
        </div>
    );
};

export default Main;
