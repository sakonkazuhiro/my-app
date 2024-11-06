import React from 'react';
import styles from '../styles/Flow.module.css';

const Flow = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Flow</h1>
            <h2 className={styles.subtitle}>お問い合わせから開発のフロー</h2>
            <div className={styles.row}>
                <div className={styles.rectangle}>01</div>
                <div className={styles.rectangle}>02</div>
                <div className={styles.rectangle}>03</div>
                <div className={styles.rectangle}>04</div>
            </div>
            <p className={styles.description}>
                開発とアライニングから、デザインの部分もパートナーがいる言記載？
                詳細は下層ページに飛ばす？検討中
            </p>
        </div>
    );
};

export default Flow;
