import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
    // 使用 useState 鉤子來管理狀態，初始值分別設定為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義更新各個顏色通道的函數
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // CSS 樣式設定物件
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
        {/* 顯示當前顏色的區域 */}
        <div
          style={{
            width: "250px",
            height: "100px",
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
          }}
        />
        <span>R: </span>{/* 顯示 R 通道的標籤和滑塊 */}
        <MySlider onChange={updateR} />
        <span>G: </span>{/* 顯示 G 通道的標籤和滑塊 */}
        <MySlider onChange={updateG} />
        <span>B: </span>{/* 顯示 B 通道的標籤和滑塊 */}
        <MySlider onChange={updateB} />
      </div>
    </>
  );
}

export default MyRGBPanel;
