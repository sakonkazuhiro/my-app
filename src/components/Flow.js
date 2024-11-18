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
                    ヒアリングした内容をもと、<br />
                    開発に必要な仕様やステップを設計していきます。
                </div>
                <div className={styles.numberText6}>02</div>
                
                <div className={styles.reAliceText}>ReAlice development flow.</div>
                
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
                    既存フローに合わせたテスト項目を作成し、サービス品質向上のめの検証をいます。
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

                <div className={styles.newContainer}>
                    <div className={styles.caseTextContainer}>
                    </div>
                </div>
                <div className={styles.caseTextContainer}>
                    開発した事例
                </div>
                <div className={styles.examplesTextContainer}>
                    Examples developed by ReAlice
                </div>
                <div className={styles.imageBackgroundContainer}></div>
                <div className={styles.customBox}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="518" height="230" viewBox="0 0 518 230" fill="none">
                        <path d="M2.01072e-05 -0.000534058L2.52549e-05 230L396.289 229.999L517.409 7.65381C519.505 4.28494 515.733 0.0738366 510.704 0.0738362L2.01072e-05 -0.000534058Z" fill="#E64646"/>
                    </svg>
                </div>
                <div className={styles.numberText1}>01</div>
                <div className={styles.conversationSystemText}>
                    AIキャラクターとの会話システムの開発
                </div>
                <div className={styles.companyText}>DeNA株式会社</div>
                <div className={styles.descriptionText}>
                    AIでできることを現時点の技術で把握し、新規事業に活かしていきたいという要望を小規模の開発でPOCを短サイクルで実現。AI音声と音声+モーションの技術で価値提供を行なった。
                </div>
                <div 
                    className={styles.imageContainer6} 
                    style={{ 
                        backgroundImage: `url('/images/AdobeStock_485225812 1.png')`, 
                        backgroundColor: '#F8F8F8', 
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        zIndex: 1000,
                        position: 'absolute',
                        bottom: '806px',
                        right: '252px',
                        width: '407px',
                        height: '671px',
                        flexShrink: 0
                    }} 
                />
                <div className={styles.numberText2}>02</div>

                <div className={styles.redBox}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="648" height="230" viewBox="0 0 648 230" fill="none">
                        <path d="M648 -0.000534058L648 230L121.711 229.999L0.590618 7.65382C-1.5049 4.28495 2.26701 0.073848 7.29624 0.0738475L648 -0.000534058Z" fill="#E64646"/>
                    </svg>
                </div>
                <div className={styles.ocrSystemText}>
                    AI OCRシステムを活用した帳票読み取りの自動化
                </div>
                <div className={styles.companyNameText}>ナカムラロジスティクス株式会社</div>
                <div className={styles.descriptionDetailText}>
                    実際の業務のヒリングから行い、AIのOCRシステムを活用して伝票の読み取り工数を自動化した。<br />
                    最大8名いた作業員を2名にまで削減
                </div>
            </div>
            <div 
                className={styles.backgroundImage} 
                style={{ 
                    backgroundImage: `url('/images/AdobeStock_734952265 1.png')`, 
                    backgroundColor: '#F8F8F8', 
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    zIndex: 1100,
                    position: 'absolute',
                    top: '4522px',
                    left: '188px',
                    width: '407px',
                    height: '669px',
                    flexShrink: 0
                }} 
            />
            <div className={styles.redRectangleBox}>
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
            </div>
            <div className={styles.contactHeadingNew}>Contact</div>
            <div className={styles.contactSubtextNew}>お問い合わせ</div>

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

export default Flow;