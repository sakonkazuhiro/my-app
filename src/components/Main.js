import React from 'react';
import styles from '../styles/Main.module.css';
import Main1 from './Main1';
import Main2 from './Main2';
import Flow from './Flow';
import Footer from './Footer';

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
            <div className={styles.textBackground}></div>
            <div className={styles.topGradientContainer}></div>
            <div className={styles.blurContainer}></div>
            
            <img 
                src="/images/AdobeStock_175818257 1.png" 
                alt="メイン画像" 
                className={styles.mainImage} 
            />

            <div className={styles.blurOverlay}></div>

            <div className={styles.secondaryContainer}></div>

            <p className={styles.descriptionText}>
                ReAlice Lab（仮）は、サービスのプレゼンスをあげるためにAIの力を最大限に活かし、<br />
                過去実績から培った知見と高度な技術力で、クリエイティブなAI体験を実現する開発チーム<br />
                を提供します。
            </p>

            <img src="/images/logo.svg" alt="ReAlice Logo" className={styles.headerLogo} />
            <nav className={styles.headerNav}>
                <div className={styles.menuLinks}>
                    {menuItems.map((item, index) => (
                        <div className={styles.menuLink} key={index}>
                            <a href="#" className={styles.navTitle}>{item.title}</a>
                            <a href="#" className={styles.navSubtitle}>{item.subtitle}</a>
                        </div>
                    ))}
                </div>
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

            <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                    <path d="M1 1L5 6L1 11" stroke="white" strokeWidth="1"/>
                </svg>
            </div>

            <Flow />

            <div className={styles.blurContainer}>
                <div className={styles.companyText}>運営会社・ReAliceについて</div>
                <img 
                    src="/images/Vector 20.svg" 
                    alt="アイコン" 
                    className={styles.companyIcon} 
                />
            </div>

            <Footer />
        </div>
    );
};

export default Main;
