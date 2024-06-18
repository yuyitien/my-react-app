import React from "react";
import "./MyCalculator.css"; // 匯入計算機樣式表

function MyButton(props) {
    // 按鈕點擊事件處理函式
    const handelClick = (e) =>{
        props.buttonClicked(e.target.value); // 呼叫從父元件傳遞過來的事件處理函式，並傳遞按鈕的值
        // alert(e.target.value); // 顯示按鈕的值，可選擇性使用
    }
  return (
    <div className="board"> {/* 按鈕面板容器 */}
      <div>
        {/* 第一行按鈕 */}
        <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
        <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
        <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
        <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
      </div>
      <div>
        {/* 第二行按鈕 */}
        <button className="btn" value="7" onClick={handelClick}>7</button>
        <button className="btn" value="8" onClick={handelClick}>8</button>
        <button className="btn" value="9" onClick={handelClick}>9</button>
        <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
      </div>
      <div>
        {/* 第三行按鈕 */}
        <button className="btn" value="4" onClick={handelClick}>4</button>
        <button className="btn" value="5" onClick={handelClick}>5</button>
        <button className="btn" value="6" onClick={handelClick}>6</button>
        <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
      </div>
      <div>
        {/* 第四行按鈕 */}
        <button className="btn" value="1" onClick={handelClick}>1</button>
        <button className="btn" value="2" onClick={handelClick}>2</button>
        <button className="btn" value="3" onClick={handelClick}>3</button>
        <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
      </div>
      <div>
        {/* 第五行按鈕 */}
        <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
        <button className="btn" value="." onClick={handelClick}>.</button>
        <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
      </div>
    </div>
  );
}

export default MyButton; // 匯出計算機按鈕面板元件
