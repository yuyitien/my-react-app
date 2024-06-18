import React from "react";
import Square from "./Square"; // 匯入方塊（Square）組件
import "./tictactoe.css"; // 匯入遊戲的 CSS 樣式表

function Board({ xIsNext, squares, onPlay }) {
  // 定義點擊事件的處理函式，i 為方塊的索引
  const handleClick = (i) => {
    // 如果已經有勝者或方塊已經被填入，則不處理點擊事件
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // 複製目前的方塊陣列
    const nextSquares = squares.slice();
    // 根據 xIsNext 判斷下一步該填入 "X" 還是 "O"
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // 呼叫外部傳入的 onPlay 函式，並傳遞更新後的方塊陣列
    onPlay(nextSquares);
  };

   // 函式：計算贏家
  const calculateWinner = (squares) => {
    // 定義可能形成連線的所有直線組合
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // 迭代所有直線組合，檢查是否有一條直線上都是相同的符號（"X" 或 "O"）
    for (let i = 0; i <= lines.length - 1; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a]; // 如果有符合條件的直線，返回該符號（"X" 或 "O"）
    }
    return null; // 如果沒有符合條件的直線，返回 null，表示還沒有贏家
  };

  // 呼叫 calculateWinner 函式，得到當前的贏家
  const winner = calculateWinner(squares);
  // 根據是否有贏家來設置狀態文字
  let status = winner
    ? `贏家: ${winner}`
    : `下一個玩家: ${xIsNext ? "X" : "O"}`;
  // let status;
  // if (winner) {
  //   status = "贏家 " + winner;
  // } else {
  //   status = "下一個玩家: " + (xIsNext ? "X" : "O");
  // }

  return (
    <>
      <div className="status">{status}</div> {/* 顯示狀態文字 */}
      <div>
        {/* 將方塊（Square）組件放置在遊戲板上，並綁定點擊事件 */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
export default Board; // 匯出 Board 組件
