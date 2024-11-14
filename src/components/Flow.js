import React from 'react';
import styles from '../styles/Flow.module.css'; // スタイルシートをインポート

const Flow = () => {
    return (
        <>
            <h2 className={styles.title}>フローのタイトル</h2>
            <p className={styles.description}>フローの詳細情報をここに記載します。</p>
            <img 
                src="/images/daiki_studioprologue_surveyphotopcbusinesstaskcheckmark2company_5c0bc1dc-c6b3-43ca-b892-134942336983 1 (1).png" 
                alt="フロー画像" 
                className={styles.image} 
            />
        </>
    );
};

export default Flow; // コンポーネントをエクスポート 