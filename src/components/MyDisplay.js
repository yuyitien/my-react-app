import React from 'react';

function MyDisplay(props){
    return <div className='display'>{props.result}</div>
    // 返回一個 div 元素，className 設置為 'display'，顯示 props 中的 result 屬性
}

export default MyDisplay; // 導出 MyDisplay 組件供其他模組使用