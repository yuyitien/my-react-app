import { useState } from "react"; // 引入 useState 鉤子

function MySlider({onChange}) {
   // 使用 useState 定義 value 狀態，初始值為 128
  const [value, setValue] = useState(128);
  // 處理滑動條值改變的函數
  const handleChange = (e) => {
    setValue(e.target.value); // 更新 value 狀態為滑動條的新值
    if (onChange){
      onChange(e.target.value); // 如果有傳入 onChange 回調函數，則調用它並傳遞新的值
    }
  };
  return (
    <div>
      <input
        type="range" // 設置 input 類型為範圍滑動條
        width = "200" // 設置寬度（這個屬性在 input 標籤中不起作用）
        min="0" // 設置最小值
        max="255" // 設置最大值
        value={value} // 綁定滑動條的值為狀態 value
        onChange={handleChange} // 當滑動條值改變時調用 handleChange 函數
      />
      <span>{value}</span> {/* 顯示當前滑動條的值 */}
    </div>
  );
}

export default MySlider; // 導出 MySlider 組件
