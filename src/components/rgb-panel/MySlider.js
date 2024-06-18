import { useState } from "react";

function MySlider({onChange}) {
  // 使用 useState 定義狀態變數 value，初始值設為 128
  const [value, setValue] = useState(128);
  // handleChange 函式處理滑塊值的變化事件
  const handleChange = (e) => {
    setValue(e.target.value); // 更新 value 的值為滑塊當前的值
    if (onChange){
      onChange(e.target.value); // 呼叫外部傳入的 onChange 函式，並傳遞目前的值
    }
  };
  return (
    <div>
      {/* input 元素設置為 type="range"，可以在 min 到 max 範圍內選擇值 */}
      <input
        type="range"
        width = "200" // 這個屬性在 input 元素上並無作用，可以移除
        min="0" // 最小值為 0
        max="255" // 最大值為 255
        value={value} // 目前的值為 state 中的 value
        onChange={handleChange} // 當值變化時執行 handleChange 函式
      />
      <span>{value}</span> {/* 顯示目前的值 */}
    </div>
  );
}

export default MySlider;
