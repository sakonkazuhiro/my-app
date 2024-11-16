import React from 'react';
import styles from '../styles/Flow.module.css';

const Flow = () => {
    return (
        <>
            <div className={styles.flowContainer}>
                <div className={styles.flowTextContainer}>
                <div className={styles.flowText}>お問い合わせから開発のフロー</div>
                </div>
                <div className={styles.backgroundElement}></div>
                <img 
                    src="/images/daik.png"
                    alt="フロー図"
                    className={styles.imageContainer}
                />
                <div className={styles.overlayContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="324" viewBox="0 0 400 324" fill="none">
                        <g filter="url(#filter0_b_1567_4102)">
                            <path d="M0 0H400L310 324H0V0Z" fill="#E64646" fillOpacity="0.8"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_1567_4102" x="-8" y="-8" width="416" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1567_4102"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1567_4102" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className={styles.hearingText}>ヒアリング</div>
                <div className={styles.hearingDescription}>
                    リアリススタッフより、AIやアプリなどのシステム開発について、本質的な課題からヒアリングいたします。
                </div>
                <div className={styles.numberText}>01</div>

                <div className={styles.reAliceText}>ReAlice development flow.</div>

                <div className={styles.backgroundElement2}></div>
                <img 
                    src="/images/AdobeStock_264141758 1.png"
                    alt="要件定義・設計"
                    className={styles.imageContainer2}
                />
                <div className={styles.overlayContainer2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="324" viewBox="0 0 400 324" fill="none">
                        <g filter="url(#filter0_b_1567_4102)">
                            <path d="M0 0H400L310 324H0V0Z" fill="#E64646" fillOpacity="0.8"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_1567_4102" x="-8" y="-8" width="416" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1567_4102"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1567_4102" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className={styles.designText}>要件定義・設計</div>
                <div className={styles.designDescription}>
                    ヒアリングした内容をもとに、<br />
                    開発に必要な仕様やステップを設計していきます。
                </div>
                <div className={styles.numberText2}>02</div>
                
                <div className={styles.backgroundElement3}></div>
                <img 
                    src="/images/workplace-8793724_1280 1.png"
                    alt="実装"
                    className={styles.imageContainer3}
                />
                <div className={styles.overlayContainer3}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="324" viewBox="0 0 400 324" fill="none">
                        <g filter="url(#filter0_b_1567_4102)">
                            <path d="M0 0H400L310 324H0V0Z" fill="#E64646" fillOpacity="0.8"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_1567_4102" x="-8" y="-8" width="416" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1567_4102"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1567_4102" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className={styles.implementText}>実装</div>
                <div className={styles.implementDescription}>
                    設計された仕様に沿って、最新技術動向を常に把握した上で、時代に合わせた実装を行います。
                </div>
                <div className={styles.numberText3}>03</div>
                
                <div className={styles.backgroundElement4}></div>
                <img 
                    src="/images/AdobeStock_256368647 1.png"
                    alt="検証・テスト運用"
                    className={styles.imageContainer4}
                />
                <div className={styles.overlayContainer4}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="324" viewBox="0 0 400 324" fill="none">
                        <g filter="url(#filter0_b_1567_4102)">
                            <path d="M0 0H400L310 324H0V0Z" fill="#E64646" fillOpacity="0.8"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_1567_4102" x="-8" y="-8" width="416" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1567_4102"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1567_4102" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className={styles.testText}>検証・テスト運用</div>
                <div className={styles.testDescription}>
                    既存フローに合わせたテスト項目を作成し、サービス品質向上のための検証を行います。
                </div>
                <div className={styles.numberText4}>04</div>
                
                <div className={styles.backgroundElement5}></div>
                <img 
                    src="/images/phone-958066_1280 1.png"
                    alt="運用・機能拡張"
                    className={styles.imageContainer5}
                />
                <div className={styles.overlayContainer5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="324" viewBox="0 0 400 324" fill="none">
                        <g filter="url(#filter0_b_1567_4102)">
                            <path d="M0 0H400L310 324H0V0Z" fill="#E64646" fillOpacity="0.8"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_1567_4102" x="-8" y="-8" width="416" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1567_4102"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1567_4102" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className={styles.operationText}>運用・機能拡張</div>
                <div className={styles.operationDescription}>
                    納した運用はもちろん、サービスの価値に即して必要な機能を定期的に増やしていきます。
                </div>
                <div className={styles.numberText5}>05</div>
            </div>
        </>
    );
};

export default Flow;