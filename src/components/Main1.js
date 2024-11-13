import React from 'react';
import styles from '../styles/Main1.module.css';

const Main1 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>リアリスAI開発のサービスリスト</h1>
            <div className={styles.rotatedText}>What’s is ReAlice?</div>

            {/* 一つのコンテナにまとめる */}
            <div style={{
                display: 'flex',
                width: '745px',
                height:'279px', /* 高さを279pxに設定 */

                alignItems: 'flex-start',
                gap: '80px',
                background: '#F1EAEA',
                padding: '20px',
                borderRadius: '8px',
                position: 'absolute',
                top: '234px',
                left: '347px'
            }}>
                {/* DXセクション */}
                <div style={{ position: 'relative', width: '155px', height: '279px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="279" viewBox="0 0 155 279" fill="none">
                        <path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"></path>
                    </svg>
                    <h2 style={{ color: '#1F1F1F', fontFamily: 'Noto Sans JP', fontSize: '50px', fontWeight: 400, lineHeight: 'normal', position: 'absolute', top: '50px', right: '80px' }}>DX</h2>
                    <p style={{ color: '#1F1F1F', fontFamily: 'Noto Sans JP', fontSize: '16px', fontWeight: 400, lineHeight: 'normal', position: 'absolute', top: '158px', left: '15px', width: '164px', height: '46px' }}>
                        AIの力を中心とした<br />
                        企業のDXに寄与します
                    </p>
                </div>

                {/* 自動化セクション */}
                <div style={{ position: 'relative', width: '155px', height: '279px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="279" viewBox="0 0 155 279" fill="none">
                        <path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"></path>
                    </svg>
                    <h2 style={{ color: '#1F1F1F', fontFamily: 'Noto Sans JP', fontSize: '40px', fontWeight: 400, lineHeight: 'normal', position: 'absolute', top: '60px', left: '15px', width: '120px', height: '58px' }}>自動化</h2>
                    <p style={{ color: '#1F1F1F', fontFamily: 'Noto Sans JP', fontSize: '16px', fontWeight: 400, lineHeight: 'normal', position: 'absolute', top: '171px', left: '29px', width: '144px', height: '69px', textAlign: 'left', margin: 0 }}>
                        作業を自動化し<br/>
                        人員削減や最適化を<br/>
                        実現</p>
                </div>

                {/* エンタメセクション */}
                <div style={{ position: 'relative', width: '155px', height: '279px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="279" viewBox="0 0 155 279" fill="none">
                        <path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"></path>
                    </svg>
                    <h2 style={{ color: '#1F1F1F', fontFamily: 'Noto Sans JP', fontSize: '40px', fontWeight: 400, lineHeight: 'normal', position: 'absolute', top: '60px', left: '24px', width: '159px', height: '58px'  }}>エンタメ</h2>
                    <p style={{ color: '#1F1F1F', fontFamily: 'Noto Sans JP', fontSize: '16px', fontWeight: 400, lineHeight: 'normal', position: 'absolute', top: '171px', left: '24px', width: '195px', height: '69px', textAlign: 'left', margin: 0   }}>
                        ReAliceは主にappゲームの<br />
                        開発に関わる技術力を<br />
                        保有しています
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main1;
