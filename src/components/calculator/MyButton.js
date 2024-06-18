import React from "react";
import "./MyCalculator.css"; // 導入自定義的 CSS 樣式

function MyButton(props) {
    // 點擊事件處理函式，接收點擊事件 e，並調用父組件傳遞的 buttonClicked 函式處理值
    const handelClick = (e) =>{
        props.buttonClicked(e.target.value); // 將按鈕的值傳遞給父組件的 buttonClicked 函式
        // alert(e.target.value);
    }
  return (
    <div className="board">
      <div>
        {/* 第一行按鈕，使用 btn-action 類別設置樣式，並在點擊時調用 handleClick 函式 */}
        <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
        <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
        <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
        <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
      </div>
      <div>
        {/* 第二行按鈕，一般按鈕樣式，點擊時調用 handleClick 函式 */}
        <button className="btn" value="7" onClick={handelClick}>7</button>
        <button className="btn" value="8" onClick={handelClick}>8</button>
        <button className="btn" value="9" onClick={handelClick}>9</button>
        <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
      </div>
      <div>
        {/* 第三行按鈕，一般按鈕樣式，點擊時調用 handleClick 函式 */}
        <button className="btn" value="4" onClick={handelClick}>4</button>
        <button className="btn" value="5" onClick={handelClick}>5</button>
        <button className="btn" value="6" onClick={handelClick}>6</button>
        <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
      </div>
      <div>
        {/* 第四行按鈕，一般按鈕樣式，點擊時調用 handleClick 函式 */}
        <button className="btn" value="1" onClick={handelClick}>1</button>
        <button className="btn" value="2" onClick={handelClick}>2</button>
        <button className="btn" value="3" onClick={handelClick}>3</button>
        <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
      </div>
      <div>
        {/* 最後一行按鈕，特殊樣式設置，點擊時調用 handleClick 函式 */}
        <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
        <button className="btn" value="." onClick={handelClick}>.</button>
        <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
      </div>
    </div>
  );
}

export default MyButton; // 導出 MyButton 組件供其他模組使用
