import React from 'react';
import styles from '../styles/Main.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <h1>AI Technology for Unleashing Creativity</h1>
            <p>
                ReAlice Lab（仮）は、サービスのプレゼンをお手伝いするためにAIの力を最大限に活かし、
                創業者が持つ知見を活かした新しい技術で、クリエイティブな体験を実現する開発チームを準備します。
            </p>
            <button className={styles.button}>会社について</button>
        </main>
    );
};

export default Main;
