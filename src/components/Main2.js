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

            <svg xmlns="http://www.w3.org/2000/svg" width="136.536" height="245" viewBox="0 0 137 146" fill="none" className={styles.vectorImageNew}>
                <path d="M128.66 244.555H6.07469C2.96563 244.555 0.30072 242.773 0.30072 240.1V2.69454C0.30072 0.0220498 6.07469 -1.31419 7.85129 1.80371L136.211 236.983C138.432 240.546 134.434 245 129.105 245L128.66 244.555Z" fill="#C24444"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="146" viewBox="0 0 82 146" fill="none" className={styles.newVectorImage}>
                <path d="M7.0509 0.0253906H76.3385C79.0034 0.0253906 81.2242 1.80705 81.2242 4.03412V136.768C81.6683 159.484 73.2295 155.475 65.2347 139.44L0.832783 7.59744C-0.943822 4.03412 2.16524 0.0253906 7.0509 0.0253906Z" fill="#C24444"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="146" viewBox="0 0 38 146" fill="none" className={styles.newVectorImage2}>
                <path d="M12.1925 0.0253906H37.5091V244.558H12.1925C5.53019 244.558 0.200373 239.213 0.200373 232.532V12.0516C-0.243778 5.37036 5.53019 0.0253906 12.1925 0.0253906Z" fill="#C24444"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none" className={styles.newVectorImage3}>
                <path d="M0.496002 55.0749V0.734375H54.2383C57.7915 0.734375 59.5681 4.7431 56.9032 6.97018L4.93752 56.8566C3.16091 58.1928 0.496002 57.302 0.496002 55.0749Z" fill="#C24444"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="57.69" height="56.75" viewBox="0 0 59 58" fill="none" className={styles.newVectorImage4}>
                <path d="M0.496002 55.0749V0.734375H54.2383C57.7915 0.734375 59.5681 4.7431 56.9032 6.97018L4.93752 56.8566C3.16091 58.1928 0.496002 57.302 0.496002 55.0749Z" fill="#C24444"/>
            </svg>
        </>
    );
};

export default Main2;