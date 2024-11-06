import Logo from './Logo';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            {/* メニューやボタンをここに追加 */}
        </header>
    );
};

export default Header;
