import Logo from './Logo';
import styles from '../styles/UnifiedStyles.css';

const Header = () => {
    return (
        <header>
            <Logo />
            <nav className={styles.nav}>
                {/* メニュー項目 */}
            </nav>
        </header>
    );
};

export default Header;
