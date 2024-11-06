import React from 'react';
import styles from '../styles/Main.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.leftContainer}>
                <div className={styles.imageTop}>
                    <img src="/images/スクリーンショット 2024-10-26 15.38.12 1 (2).png" alt="Top Image" className={styles.topImage} />
                </div>
                <div className={styles.imageBottom}>
                    <img src="/images/logo.svg" alt="Bottom Image" className={styles.bottomImage} />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.imageContainer}>
                    <img src="/images/daiki_studioprologue_nodedegitalvector_illusttextureComputer_in_019c20b6-d433-40e9-bd2e-0501e7899721 1 (1).png" alt="Background" className={styles.backgroundImage} />
                    <div className={styles.textOverlay}>
                        <h1 className={styles.title}>AI Technology for Unleashing Creativity</h1>
                        <p className={styles.subtitle}>創造力を引き出すAIテクノロジー</p>
                    </div>
                </div>
            </div>
        </main>
    );
};
<div class="container">
    <div class="header">Header Section</div>
    <div class="section">
        <h2 class="section-title">What's is ReAlice Lab?</h2>
        <div class="card-container">
            <div class="card">01</div>
            <div class="card">02</div>
            <div class="card">03</div>
            <div class="card">04</div>
        </div>
        <p>• 3つのポイントがあれば</p>
        <p>例</p>
        <ul>
            <li>他社より優れた...</li>
            <li>000が実現できるチーム体制</li>
            <li>独自の開発ステップ</li>
        </ul>
    </div>
    <div class="section">
        <h2 class="flow-title">Flow</h2>
        <p class="flow-description">お問い合わせから開発のフロー</p>
        <div class="flow-card-container">
            <div class="flow-card">01</div>
            <div class="flow-card">02</div>
            <div class="flow-card">03</div>
            <div class="flow-card">04</div>
        </div>
    </div>
</div>
export default Main;