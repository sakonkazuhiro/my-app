import React from 'react';
import styles from '../styles/Main1.module.css';

const ServiceBackgroundSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="279" viewBox="0 0 155 279" fill="none" className={styles.serviceSvg}>
        <path d="M146.211 -0.0000177354 L6.55479 0.507233 C3.0253 0.507233 0.0000241692 2.53613 0.0000239032 5.5795 L2.68254e-7 275.932 C2.19518e-9 278.975 6.55477 280.497 8.57162 276.946 L154.289 9.13011 C156.81 5.07228 152.272 0.0000133121 146.222 0.0000127831 L146.211 -0.0000177354 Z" fill="#FFA4A4" />
    </svg>
);

const Icon = ({ iconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className={iconClass}>
        <path d="M25.3333 38.6662V25.3329H38.6667V38.6662H25.3333ZM24.6667 54.0509V49.3329H19.4873C18.1402 49.3329 17 48.8662 16.0667 47.9329C15.1333 46.9996 14.6667 45.8594 14.6667 44.5122V39.3329H9.94867V35.3329H14.6667V28.6662H9.94867V24.6662H14.6667V19.4869C14.6667 18.1398 15.1333 16.9996 16.0667 16.0662C17 15.1329 18.1402 14.6662 19.4873 14.6662H24.6667V9.94824H28.6667V14.6662H35.3333V9.94824H39.3333V14.6662H44.5127C45.8598 14.6662 47 15.1329 47.9333 16.0662C48.8667 16.9996 49.3333 18.1398 49.3333 19.4869V24.6662H54.0513V28.6662H49.3333V35.3329H54.0513V39.3329H49.3333V44.5122C49.3333 45.8594 48.8667 46.9996 47.9333 47.9329C47 48.8662 45.8598 49.3329 44.5127 49.3329H39.3333V54.0509H35.3333V49.3329H28.6667V54.0509H24.6667ZM44.5127 45.3329C44.718 45.3329 44.906 45.2474 45.0767 45.0762C45.2478 44.9056 45.3333 44.7176 45.3333 44.5122V19.4869C45.3333 19.2816 45.2478 19.0936 45.0767 18.9229C44.906 18.7518 44.718 18.6662 44.5127 18.6662H19.4873C19.282 18.6662 19.094 18.7518 18.9233 18.9229C18.7522 19.0936 18.6667 19.2816 18.6667 19.4869V44.5122C18.6667 44.7176 18.7522 44.9056 18.9233 45.0762C19.094 45.2474 19.282 45.3329 19.4873 45.3329H44.5127Z" fill="#E64646"/>
    </svg>
);

const ServiceSection = ({ title, description, descriptionClass, titleClass, iconClass }) => (
    <div className={styles.serviceSection}>
        <ServiceBackgroundSvg />
        <Icon iconClass={iconClass} />
        <h2 className={titleClass}>
            {title}
        </h2>
        <p className={descriptionClass}>
            {description}
        </p>
    </div>
);

const Main1 = () => {
    const services = [
        {
            title: 'DX',
            description: (
                <>
                    AIの力を中心とした<br />
                    企業のDXに寄与します
                </>
            ),
            descriptionClass: styles.dxDescription,
            titleClass: styles.dxTitle,
            iconClass: styles.dxIcon
        },
        {
            title: '自動化',
            description: (
                <>
                    作業を自動化し<br />
                    人員削減や最適化を<br />
                    実現
                </>
            ),
            descriptionClass: styles.automationDescription,
            titleClass: styles.automationTitle,
            iconClass: styles.automationIcon
        },
        {
            title: 'エンタメ',
            description: (
                <>
                    ReAliceは主にappゲームの<br />
                    開発に関わる技術力を<br />
                    保有しています
                </>
            ),
            descriptionClass: styles.entertainmentDescription,
            titleClass: styles.entertainmentTitle,
            iconClass: styles.entertainmentIcon
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
                        descriptionClass={service.descriptionClass}
                        titleClass={service.titleClass}
                        iconClass={service.iconClass}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main1;
