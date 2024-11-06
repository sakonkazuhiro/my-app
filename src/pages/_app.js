import '../styles/global.css'; // グローバルCSSをインポート
import '../styles/Main.module.css'; // モジュールCSSをインポート

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
