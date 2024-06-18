import React, { useState } from "react";
import MyDisplay from "./MyDisplay"; // 導入顯示組件
import MyButton from "./MyButton"; // 導入按鈕組件
import "./MyCalculator.css"; // 導入樣式表

function MyCalculator() {
  const [result, setResult] = useState("0"); // 使用狀態來追蹤計算機的結果，初始為"0"
  // 點擊事件處理函式，處理按鈕點擊後的邏輯
  const handleClick = (value) => {
    // alert(value);
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        // 如果當前結果為"0"，則直接將按鈕的值設置為新的結果值
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value); // 否則將按鈕的值附加到當前結果值後面
        }
        break;
      case "=":
        setResult(eval(result).toString()); // 計算結果
        break;
      case "c":
        setResult(""); // 清除結果
        break;
      case "+/-":
        setResult(parseInt(result, 10) * -1); // 切換正負號
        break;
      case "%":
        setResult(parseInt(result, 10) / 100); // 計算百分比
        break;
      default:
        break;
    }
  };
  return (
    <div className="calculator"> {/* 計算機容器 */}
      <MyDisplay result = {result} /> {/* 顯示組件，顯示當前結果 */}
      <MyButton buttonClicked={handleClick} /> {/* 按鈕組件，將點擊事件處理函式傳遞給子組件 */}
    </div>
  );
}

export default MyCalculator;
