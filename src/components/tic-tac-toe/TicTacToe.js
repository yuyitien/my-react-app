import React, { useState } from "react";
import Board from "./Board"; // 導入遊戲板組件
import "./tictactoe.css"; // 導入樣式表

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // 使用狀態管理遊戲歷史記錄，初始為一個長度為9的空陣列
  const [currentMove, setCurrentMove] = useState(0); // 使用狀態管理當前移動步數，初始為0
  const currentSquares = history[currentMove]; // 當前遊戲盤面即為歷史記錄中的第currentMove步
  const xIsNext = currentMove % 2 === 0; // 判斷下一步是輪到 X 還是 O 下棋

  // 處理玩家下棋的函式，接收下一步的棋盤狀態並更新歷史記錄和當前移動步數
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // 複製歷史記錄並加入新的棋盤狀態
    setHistory(nextHistory); // 更新歷史記錄
    setCurrentMove(nextHistory.length - 1); // 更新當前移動步數
  };

  // 處理跳轉到特定步數的函式，接收要跳轉的步數並設置為當前移動步數
  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  // 生成遊戲歷程的按鈕列表，每一步都有一個跳轉按鈕
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "回到第 " + move + " 步"; // 若步數大於0，顯示"回到第 move 步"
    } else {
      description = "遊戲開始"; // 步數為0時，顯示"遊戲開始"
    }
    return (
      <>
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>{/* 按鈕點擊時跳轉到對應步數 */}
        </li>
      </>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /> {/* 渲染遊戲板組件 */}
      </div>
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol> {/* 顯示遊戲歷程的按鈕列表 */}
      </div>
    </div>
  );
}

export default TicTacToe;
