import React from "react"; // 引入 React 庫
import "./MyCalculator.css"; // 引入 CSS 樣式

function MyButton(props) {
    // 點擊按鈕時的處理函數
    const handelClick = (e) =>{
        props.buttonClicked(e.target.value); // 調用從父組件傳遞來的 buttonClicked 函數，並傳遞按鈕的值作為參數
        // alert(e.target.value);
    }
  return (
    <div className="board"> {/* 應用 board 類名 */}
      <div>
        <button className="btn btn-action" value="c" onClick={handelClick}>C</button> {/* 渲染清除按鈕 */}
        <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button> {/* 渲染正負切換按鈕 */}
        <button className="btn btn-action" value="%" onClick={handelClick}>%</button> {/* 渲染百分比按鈕 */}
        <button className="btn btn-operator" value="/" onClick={handelClick}>/</button> {/* 渲染除法按鈕 */}
      </div>
      <div>
        <button className="btn" value="7" onClick={handelClick}>7</button> {/* 渲染數字 7 按鈕 */}
        <button className="btn" value="8" onClick={handelClick}>8</button> {/* 渲染數字 8 按鈕 */}
        <button className="btn" value="9" onClick={handelClick}>9</button> {/* 渲染數字 9 按鈕 */}
        <button className="btn btn-operator" value="*" onClick={handelClick}>*</button> {/* 渲染乘法按鈕 */}
      </div>
      <div>
        <button className="btn" value="4" onClick={handelClick}>4</button> {/* 渲染數字 4 按鈕 */}
        <button className="btn" value="5" onClick={handelClick}>5</button> {/* 渲染數字 5 按鈕 */}
        <button className="btn" value="6" onClick={handelClick}>6</button> {/* 渲染數字 6 按鈕 */}
        <button className="btn btn-operator" value="-" onClick={handelClick}>-</button> {/* 渲染減法按鈕 */}
      </div>
      <div>
        <button className="btn" value="1" onClick={handelClick}>1</button> {/* 渲染數字 1 按鈕 */}
        <button className="btn" value="2" onClick={handelClick}>2</button> {/* 渲染數字 2 按鈕 */}
        <button className="btn" value="3" onClick={handelClick}>3</button> {/* 渲染數字 3 按鈕 */}
        <button className="btn btn-operator" value="+" onClick={handelClick}>+</button> {/* 渲染加法按鈕 */}
      </div>
      <div>
        <button className="btn btn-0" value="0" onClick={handelClick}>0</button> {/* 渲染數字 0 按鈕 */}
        <button className="btn" value="." onClick={handelClick}>.</button> {/* 渲染小數點按鈕 */}
        <button className="btn btn-operator" value="=" onClick={handelClick}>=</button> {/* 渲染等於按鈕 */}
         {/* 按鈕渲染:
            每個按鈕都有一個 className 來設置不同的樣式 (btn, btn-action, btn-operator, btn-0)。
            每個按鈕都有一個 value 屬性，該屬性指定按鈕代表的數字、運算符號或功能。
            每個按鈕都設置了 onClick 屬性，當按鈕被點擊時，它會調用 handleClick 函數來處理點擊事件。 */}
      </div>
    </div>
  );
}

export default MyButton; // 導出 MyButton 組件
