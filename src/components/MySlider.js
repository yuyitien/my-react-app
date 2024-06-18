import { useState } from "react"; // 引入 useState 鉤子

function MySlider({onChange}) {
  // 定義 value 狀態，初始值為 128
  const [value, setValue] = useState(128);

  // 處理滑動條改變的函數
  const handleChange = (e) => {
    setValue(e.target.value); // 更新 value 狀態
    if (onChange){
      onChange(e.target.value); // 如果有傳入 onChange 回調函數，調用它並傳遞新值
    }
  };
  return (
    <div>
      <input
        type="range" // 設置 input 類型為滑動條
        width = "200" // 設置滑動條寬度
        min="0" // 設置滑動條最小值
        max="255" // 設置滑動條最大值
        value={value} // 綁定滑動條值為狀態 value
        onChange={handleChange} // 當滑動條值改變時調用 handleChange 函數
      />
      <span>{value}</span>  
    </div>
  );
}

export default MySlider; // 導出 MySlider 組件
