import React from 'react'; // 引入 React 庫
import './MyCalculator.css'; // 引入 CSS 樣式

function MyButton(props){
    return(
        <div className='board'>計算機按鈕面板</div> // 渲染一個 div，顯示 "計算機按鈕面板"
    );
}

export default MyButton; // 導出 MyButton 組件