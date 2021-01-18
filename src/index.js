import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd'
import store from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
             <App />
        </Provider>
    </ConfigProvider>,
  document.getElementById('root')
);

reportWebVitals();
