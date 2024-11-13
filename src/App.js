// my-app/src/App.js
import React from 'react';
import './App.css';
import Main from './components/Main'; // Mainコンポーネントをインポート

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 不要な画像を削除 */}
        <Main /> {/* Mainコンポーネントを表示 */}
      </header>
    </div>
  );
}

export default App;