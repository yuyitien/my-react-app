import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";// 引入 MySlider 組件

function MyRGBPanel() {
    // 使用 useState 定義 r, g, b 狀態，初始值為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 更新 r 狀態的函數
    const updateR = (v) => setR(v);
    // 更新 g 狀態的函數
    const updateG = (v) => setG(v);
    // 更新 b 狀態的函數
    const updateB = (v) => setB(v);

    // 定義 RGB 面板的樣式
    const rgbCss = {
        border: "1px solid blue", // 邊框設為藍色實線
        borderRadius: "20px", // 邊框圓角
        width: "300px", // 寬度
        display: "flex", // 使用 flex 布局
        flexDirection: "column", // 元素垂直排列
        padding: "20px", // 內邊距
        justifyContent: "center", // 垂直居中
        alignItems: "center", // 水平居中
        margin: "auto", // 自動水平外邊距
      };
  return (
    <>
      <div
        style={rgbCss}
      >
        <h2 style={{color: "red"}}>
          目前色彩
        </h2>
        <div
          style={{
            width: "250px", // 色彩顯示區域寬度
            height: "100px", // 色彩顯示區域高度
            backgroundColor: `rgb(${r}, ${g}, ${b})`, // 根據 r, g, b 值設置背景顏色
          }}
        />
        <span>R: </span> // 紅色滑動條標籤
        <MySlider onChange={updateR} /> // MySlider 組件，當值改變時調用 updateR
        <span>G: </span> // 綠色滑動條標籤
        <MySlider onChange={updateG} /> // MySlider 組件，當值改變時調用 updateG
        <span>B: </span> // 藍色滑動條標籤
        <MySlider onChange={updateB} /> // MySlider 組件，當值改變時調用 updateB
      </div>
    </>
  );
}

export default MyRGBPanel; // 導出 MyRGBPanel 組件
