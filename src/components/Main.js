import React from 'react';
import styles from '../styles/Main.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.title}>AI Technology for Unleashing Creativity</h1>
                <p className={styles.subtitle}>
                    創造力を引き出すAIテクノロジー
                </p>
                <p className={styles.description}>
                    ReAlice Lab（仮）は、サービスのプレゼンをお手伝いするためにAIの力を最大限に活かし、
                    創業者が持つ知見を活かした新しい技術で、クリエイティブな体験を実現する開発チームを準備します。
                </p>
                <button className={styles.button}>会社について</button>
            </header>
            <div className={styles.imageContainer}>
                <img src="/path/to/your/image.jpg" alt="Description" className={styles.image} />
            </div>
        </main>
    );
};

export default Main;
