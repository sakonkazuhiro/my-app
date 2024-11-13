import React from 'react';
import styles from '../styles/Main2.module.css';
import Main1 from './Main1'; // Main1.jsをインポート

const Main2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundCircle} /> {/* 背景の円 */}
            <div className={styles.innerCircle} /> {/* 内側の円 */}
            <div className={styles.rectangle}>
                <span className={styles.contactText}>Contact</span>
                <span className={styles.inquiryText}>お問い合わせ</span>
            </div>
        </div>
    );
};

export default Main2;