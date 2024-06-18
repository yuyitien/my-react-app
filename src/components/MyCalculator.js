import React, { useState } from "react";
import MyDisplay from "./MyDisplay"; // 導入顯示組件
import MyButton from "./MyButton"; // 導入按鈕組件
import "./MyCalculator.css"; // 導入自定義的 CSS 樣式表

function MyCalculator() {
  const [result, setResult] = useState("0"); // 使用狀態管理計算機的結果，初始值為 "0"
  // handleClick是MyButton的事件處理常式
  const handleClick = (value) => {
    // 处理数字和小数点的输入
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
        // 如果当前结果为 "0"，直接替换为输入的值，否则在当前结果后追加输入的值
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value); // 在当前结果后追加运算符
        }
        break;
      case "=":
        // 使用 eval() 方法计算当前表达式的值，并将结果转换为字符串更新状态
        setResult(eval(result).toString());
        break;
      // 处理清除操作的输入
      case "c":
        // 将结果重置为 "0"
        setResult("");
        break;
      // 处理正负号切换的输入
      case "+/-":
        // 将当前结果转换为整数，并乘以 -1，然后转换为字符串更新状态
        setResult(parseInt(result, 10) * -1);
        break;
      // 处理百分号的输入
      case "%":
        // 将当前结果转换为整数，并除以 100，然后转换为字符串更新状态
        setResult(parseInt(result, 10) / 100);
        break;
      default:
        break;
    }
  };
  return (
    <div className="calculator"> {/* 計算機主容器 */}
      {/* 顯示組件，用於顯示計算結果，傳遞當前結果狀態作為 props */}
      <MyDisplay result = {result} />
      {/* 按鈕組件，傳遞點擊事件處理函式作為 buttonClicked props */}
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

export default MyCalculator;
