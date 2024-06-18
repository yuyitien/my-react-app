import React, { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";
import "./MyCalculator.css";

function MyCalculator() {
  const [result, setResult] = useState("0");
  // handleClick是MyButton的事件處理常式
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
        // 如果結果為初始狀態"0"，則用新值取代，否則將新值附加在現有結果後面
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        // 計算結果
        setResult(eval(result).toString());
        break;
      case "c":
        // 清除結果
        setResult("");
        break;
      case "+/-":
        // 切換正負號
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        // 計算百分比
        setResult(parseInt(result, 10) / 100);
        break;
      default:
        break;
    }
  };
  return (
    <div className="calculator">
      {/* 呈現計算結果的組件 */}
      <MyDisplay result = {result} />
      {/* 按鈕面板組件，將點擊事件傳遞給handleClick函式 */}
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

export default MyCalculator;
