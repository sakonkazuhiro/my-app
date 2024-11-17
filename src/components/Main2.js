import React from 'react';
import styles from '../styles/Main2.module.css';

const Main2 = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="264" viewBox="0 0 1024 264" className={styles.contactRectangle}>
                <g filter="url(#filter0_d_1566_3175)">
                    <path d="M12 8H1012V213H976.5V248H12V8Z" fill="#E64646"/>
                </g>
                <defs>
                    <filter id="filter0_d_1566_3175" x="0" y="0" width="1024" height="264" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="6"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.27451 0 0 0 0 0.27451 0 0 0 0.24 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1566_3175"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1566_3175" result="shape"/>
                    </filter>
                </defs>
            </svg>
            <div className={styles.contactHeading}>Contact</div>
            <div className={styles.contactSubtext}>お問い合わせ</div>

            <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                    <path d="M1 1L5 6L1 11" stroke="white" strokeWidth="1"/>
                </svg>
            </div>

            <div className={styles.flowImageContainer}></div>

            <div className={styles.circleOverlay}></div>

            <div className={styles.circleContainer}></div>

            <div className={styles.circle}></div>

            <div className={styles.innerCircle}></div>
        </>
    );
};

export default Main2;