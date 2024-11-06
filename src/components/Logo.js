import Image from 'next/image';
import styles from '../styles/Logo.module.css'; // スタイル用のCSSファイルを作成

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <Image 
                src="/images/logo.svg" // ロゴ画像のパス
                alt="ReAlice Logo"
                width={150} // 幅を指定
                height={50} // 高さを指定
            />
        </div>
    );
};

export default Logo;
