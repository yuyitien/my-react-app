import React from "react";
import Square from "./Square"; // 引入 Square 組件
import "./tictactoe.css"; // 引入自定義的 CSS 樣式

function Board({ xIsNext, squares, onPlay }) {
  // xIsNext: 下一步是 X 還是 O
  // squares: 棋盤格子的狀態陣列，包含 "X", "O" 或 null
  // onPlay: 在點擊棋盤格子時執行的函數，將更新後的 squares 傳遞給父組件

  // 點擊棋盤格子時的事件處理函數
  const handleClick = (i) => {
    const nextSquares = squares.slice(); // 複製一份目前的 squares 陣列

    // 根據 xIsNext 的值設置下一步的棋子是 "X" 還是 "O"
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // 將更新後的 squares 陣列傳遞給父組件的 onPlay 函數
    onPlay(nextSquares);
  };

  let status = "下一個玩家: " + (xIsNext ? "X" : "O"); // 顯示下一個玩家是誰的訊息
  return (
    <>
      <div className="status">{status}</div> {/* 顯示遊戲狀態的訊息 */}
      <div>
        {/* 第一列的三個 Square 組件，分別傳遞不同的 props */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        {/* 第二列的三個 Square 組件，分別傳遞不同的 props */}
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        {/* 第三列的三個 Square 組件，分別傳遞不同的 props */}
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
export default Board;
