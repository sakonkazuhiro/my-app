import React from 'react';
import styles from '../styles/Main1.module.css';

const ServiceBackgroundSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="279" viewBox="0 0 155 279" fill="none" className={styles.serviceSvg}>
        <path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4" />
    </svg>
);

const ServiceSection = ({ title, description }) => (
    <div className={styles.serviceSection}>
        <ServiceBackgroundSvg />
        <h2 className={title === 'DX' ? styles.serviceTitleDx : styles.serviceTitle}>
            {title}
        </h2>
        <p className={styles.serviceDescription}>
            {description}
        </p>
    </div>
);

const Main1 = () => {
    const services = [
        {
            title: 'DX',
            description: 'AIの力を中心とした企業のDXに寄与します'
        },
        {
            title: '自動化',
            description: '作業を自動化し人員削減や最適化を実現'
        },
        {
            title: 'エンタメ',
            description: 'ReAliceは主にappゲームの開発に関わる技術力を保有しています'
        }
    ];

    return (
        <div className={styles.serviceContainer}>
            <h1 className={styles.serviceMainTitle}>リアリスAI開発のサービスリスト</h1>
            <div className={styles.serviceRotatedText}>What's is ReAlice?</div>
            <div className={styles.serviceList}>
                {services.map((service, index) => (
                    <ServiceSection 
                        key={index}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main1;
