import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd'

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
            <App />
    </ConfigProvider>,
  document.getElementById('root')
);

reportWebVitals();
