import { useState } from "react";

function MySlider({onChange}) {
  // 使用 useState 鉤子來管理狀態，初始值設定為 128
  const [value, setValue] = useState(128);

  // 處理滑動條值變化的函數
  const handleChange = (e) => {
    setValue(e.target.value); // 更新滑動條的值
    if (onChange){
      onChange(e.target.value); // 執行父組件傳遞過來的 onChange 函數，將當前值傳遞給它
    }
  };
  return (
    <div>
      {/* input 元素為類型為 range，用來產生滑動條 */}
      <input
        type="range"
        width = "200" // 這裡的 width 是無效的屬性，不會影響元素的寬度
        min="0"
        max="255"
        value={value} // 滑動條目前的值
        onChange={handleChange} // 當滑動條值變化時執行 handleChange 函數
      />
      <span>{value}</span> {/* 顯示目前滑動條的值 */}
    </div>
  );
}

export default MySlider;
