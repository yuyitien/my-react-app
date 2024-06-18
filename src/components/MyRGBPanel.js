import React from "react"; // 引入 React 庫
import { useState } from "react"; // 引入 useState 鉤子
import MySlider from "./MySlider"; // 引入 MySlider 組件

function MyRGBPanel() {
    // 使用 useState 定義 r, g, b 狀態，初始值為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義更新 r, g, b 狀態的函數
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義 RGB 面板的樣式
    const rgbCss = {
        border: "1px solid blue", // 藍色實線邊框
        borderRadius: "20px", // 圓角
        width: "300px", // 寬度
        display: "flex", // 使用 flex 布局
        flexDirection: "column", // 垂直排列
        padding: "20px", // 內邊距
        justifyContent: "center", // 垂直居中
        alignItems: "center", // 水平居中
        margin: "auto", // 自動水平外邊距
      };
  return (
    <>
      <div
        style={rgbCss} // 應用 RGB 面板樣式
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
        <span>R: </span> {/* 紅色標籤 */}
        <MySlider onChange={updateR} /> {/* MySlider 組件，用於調整紅色值，當值改變時調用 updateR */}
        <span>G: </span> {/* 綠色標籤 */}
        <MySlider onChange={updateG} /> {/* MySlider 組件，用於調整綠色值，當值改變時調用 updateG */}
        <span>B: </span> {/* 藍色標籤 */}
        <MySlider onChange={updateB} /> {/* MySlider 組件，用於調整藍色值，當值改變時調用 updateB */}
      </div>
    </>
  );
}

export default MyRGBPanel; // 導出 MyRGBPanel 組件
