import React from "react";
import "./tictactoe.css"; // 引入自定義的 CSS 樣式

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
