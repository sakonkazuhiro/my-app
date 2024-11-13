// my-app/src/App.js
import React from 'react';
import './App.css';
import Main from './components/Main'; // Mainコンポーネントをインポート
import Main2 from './components/Main2';
import Main1 from './components/Main1'; // ここで一度だけインポート

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 不要な画像を削除 */}
        <Main /> {/* Mainコンポーネントを表示 */}
        <Main2 />
        <Main1 /> {/* Main1コンポーネントを表示 */}
      </header>
    </div>
  );
}

export default App;