import Logo from './Logo';
import styles from '../styles/Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Logo />
            <div className="mainImage">
                <img src="/path/to/main-image.jpg" alt="Main Image" />
            </div>
        </div>
    );
};

export default Layout;
