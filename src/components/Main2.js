import React from 'react';
import styles from '../styles/Main2.module.css';

const Main2 = () => {
    return (
        <>
            <div className={styles.contactContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="240" viewBox="0 0 1000 240" className={styles.contactRectangle}>
                    <g filter="url(#filter0_d)">
                        <path d="M12 8H988V213H952.5V248H12V8Z" fill="#E64646"/>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0" y="0" width="1000" height="240" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="6"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.27451 0 0 0 0 0.27451 0 0 0 0.24 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className={styles.contactHeading}>Contact</div>
                <div className={styles.contactSubtext}>お問い合わせ</div>
                <img 
                    src="/images/Vector 20.svg" 
                    alt="アイコン" 
                    className={styles.contactIcon} 
                />
            </div>
            <div className={styles.flowImageContainer}></div>
        </>
    );
};

export default Main2;