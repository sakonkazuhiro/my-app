import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>What’s is ReAlice Lab?</h1>
            <h2 className={styles.subtitle}>リアリスンの特徴</h2>
            <div className={styles.row}>
                <div className={styles.rectangle}>01</div>
                <div className={styles.rectangle}>02</div>
                <div className={styles.rectangle}>03</div>
                <div className={styles.rectangle}>04</div>
            </div>
        </div>
    );
};

export default About;
