import React from 'react';
import styles from '../styles/Main2.module.css'; // スタイルシートをインポート

const Main2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rectangle}>
                <div className={styles.contactText}>Contact</div>
                <div className={styles.inquiryText}>お問い合わせ</div>
                <img src="/images/Vector 20.svg" alt="アイコン" className={styles.icon} />
            </div>
        </div>
    );
};

export default Main2; // コンポーネントをエクスポート