import React from "react";
import "./tictactoe.css"; // 匯入井字遊戲的 CSS 樣式表

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value} {/* 顯示方塊內容（"X"、"O" 或 null） */}
    </button>
  );
}

export default Square; // 匯出 Square 組件
