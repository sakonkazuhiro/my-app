import { useEffect, useRef } from 'react';
import styles from '../styles/Logo.module.css'; // スタイル用のCSSファイルをインポート

const Logo = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (logoRef.current) {
                // ウィンドウサイズに応じてロゴの位置を調整
                logoRef.current.style.position = 'absolute'; // 絶対配置に設定
                logoRef.current.style.width = '140px'; // 幅を140pxに設定
                logoRef.current.style.height = '28px'; // 高さを28pxに設定
                logoRef.current.style.top = '43px'; // トップの位置を43pxに設定
                logoRef.current.style.left = '40px'; // 左の位置を40pxに設定
                logoRef.current.style.right = '1260px'; // 右の位置を1260pxに設定
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 初期位置を設定

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.logo} ref={logoRef}>
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="28" viewBox="0 0 140 28" fill="none">
                <g clipPath="url(#clip0_1323_3532)">
                    {/* SVGのパスをここに挿入 */}
                    <path d="M14.7127 27.9996H0.661818C0.305455 27.9996 0 27.7956 0 27.4896V0.305606C0 -0.000404891 0.661818 -0.15341 0.865455 0.203602L15.5782 27.1326C15.8327 27.5406 15.3745 28.0506 14.7636 28.0506L14.7127 27.9996Z" fill="#E64646"/>
                </g>
                <defs>
                    <clipPath id="clip0_1323_3532">
                        <rect width="140" height="28" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default Logo;
