import React from 'react';
import styles from './Main2.module.css'; // 正しいパスを確認
import Main1 from './Main1'; // Main1.jsをインポート

const Main2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundCircle} /> {/* 背景の円 */}
            <div className={styles.innerCircle} /> {/* 内側の円 */}
            <h1 className={styles.title}>新しい作業のタイトル</h1>
            <Main1 className={styles.main1} /> {/* Main1コンポーネントを使用 */}
            <div className={styles.button} /> {/* ボタン */}
            {/* ここに新しい作業を追加 */}
        </div>
    );
};

export default Main2;