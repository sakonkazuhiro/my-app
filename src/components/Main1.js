import React from 'react';
import styles from '../styles/Main1.module.css';

const Main1 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>リアリスAI開発のサービスリスト</h1>
            <div className={styles.rotatedText}>What’s is ReAlice?</div>

            {/* 新しいコンテナを追加 */}
            <div className={styles.serviceContainer}>
                <div className={styles.serviceItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="279" viewBox="0 0 155 279" fill="none">
                        <path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"/>
                    </svg>
                    <h2>DX</h2>
                    <p>AIの力を中心とした企業のDXに寄与します</p>
                </div>
                <div className={styles.serviceItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="279" viewBox="0 0 155 279" fill="none">
                        <path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"/>
                    </svg>
                    <h2>自動化</h2>
                    <p>作業を自動化し人員削減や最適化を実現</p>
                </div>
                <div className={styles.serviceItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="279" viewBox="0 0 155 279" fill="none">
                        <path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"/>
                    </svg>
                    <h2>エンタメ</h2>
                    <p>ReAliceは主にappゲームの開発に関する技術力を保持しています</p>
                </div>
            </div>
        </div>
    );
};

const ServiceListTitle = () => {
    return (
        <h1 className={styles.serviceTitle}>
            リアリスAI開発のサービスリスト
        </h1>
    );
};

export default Main1;
export { ServiceListTitle };
