import React from "react";
import { useState } from "react";
import MySlider from "./MySlider"; // 導入自定義的 MySlider 組件

function MyRGBPanel() {
    // 使用 useState 定義三個狀態變數，分別代表 RGB 的值，初始值設為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義三個函式，用來更新 r、g、b 的值
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義 CSS 物件，用來設定 RGB 面板的外觀樣式
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
        style={rgbCss}
      >
        <h2 style={{color: "red"}}>
          目前色彩
        </h2>
        {/* 顯示當前顏色的方塊，背景顏色由 r、g、b 變數決定 */}
        <div
          style={{
            width: "250px",
            height: "100px",
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
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
