import React, {useState} from 'react'; // 引入 React 和 useState 鉤子
import MyDisplay from './MyDisplay'; // 引入 MyDisplay 組件
import MyButton from './MyButton'; // 引入 MyButton 組件
import './MyCalculator.css'; // 引入 CSS 樣式

function MyCalculator(){
    return(
        <div className='calculator'> {/* 渲染一個 div，應用 calculator 類名 */}
            <MyDisplay /> {/* 渲染 MyDisplay 組件 */}
            <MyButton /> {/* 渲染 MyButton 組件 */}
        </div>
    );
}

export default MyCalculator; // 導出 MyCalculator 組件