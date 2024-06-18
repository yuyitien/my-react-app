import React from "react";
import { useState } from "react";
import MySlider from "./MySlider"; // 導入自定義的 MySlider 組件

function MyRGBPanel() {
    // 使用 useState 鉤子來管理 r、g、b 三個色彩通道的狀態
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義更新 r、g、b 值的函式
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義用於樣式的物件，包含邊框、圓角、寬度、顯示方式等屬性
    const rgbCss = {
        border: "1px solid blue",
        borderRadius: "20px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      };
  return (
    <>
      <div
        style={rgbCss} > {/* 使用 rgbCss 物件設置 div 樣式 */}
      
        <h2 style={{color: "red"}}> {/* 設置標題文字為紅色 */}
          目前色彩
        </h2>
        <div
          style={{
            width: "250px",
            height: "100px",
            backgroundColor: `rgb(${r}, ${g}, ${b})`, // 根據 r、g、b 的狀態值設置背景色
          }}
        />
        <span>R: </span>
        <MySlider onChange={updateR} />
        <span>G: </span>
        <MySlider onChange={updateG} />
        <span>B: </span>
        <MySlider onChange={updateB} />
      </div>
    </>
  );
}

export default MyRGBPanel;
