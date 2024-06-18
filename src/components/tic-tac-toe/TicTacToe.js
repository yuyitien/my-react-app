import React, { useState } from "react";
import Board from "./Board"; // 匯入井字遊戲的棋盤元件
import "./tictactoe.css"; // 匯入樣式表

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // 使用 useState 鉤子設置狀態：歷史步驟陣列，初始狀態是包含 9 個空值的陣列
  const [currentMove, setCurrentMove] = useState(0); // 使用 useState 鉤子設置狀態：目前的步驟索引，初始狀態是 0
  const currentSquares = history[currentMove]; // 從歷史步驟中取得當前的棋盤狀態陣列
  const xIsNext = currentMove % 2 === 0; // 判斷下一步是 X 還是 O，偶數步是 X，奇數步是 O

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // 複製歷史步驟陣列並加入新的棋盤狀態陣列作為下一步
    setHistory(nextHistory); // 更新歷史步驟陣列
    setCurrentMove(nextHistory.length - 1); // 設置目前步驟為最後一個步驟的索引
  };
  return (
    <div className="game"> {/* 遊戲主容器 */}
      <div className="game-board"> {/* 遊戲棋盤容器 */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /> {/* 匯入棋盤元件並傳遞相關屬性 */}
      </div>
    </div>
  );
}

export default TicTacToe; // 匯出井字遊戲主元件
