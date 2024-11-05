import '../styles/globals.css'; // グローバルCSSのインポート
import '../styles/Header.module.css'; // 必要に応じてモジュールCSSもインポート

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
