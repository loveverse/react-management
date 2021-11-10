import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'antd/dist/antd.css'
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'
// 读取local中保存user,保存到内存中

const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
 