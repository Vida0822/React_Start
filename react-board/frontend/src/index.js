import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM: React 컴포넌트를 실제 DOM에 렌더링할 때 사용
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
