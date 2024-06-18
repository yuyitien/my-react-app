import "./App.css";
import MyRGBPanel from "./components/MyRGBPanel";
import MySlider from "./components/MySlider";

function App() {
  return (
    <div className="App">
      {<h1>MySlider</h1>}  // 標題：MySlider
      <MySlider /> // 渲染 MySlider 組件
      <h1>MyRGBPanel</h1> // 標題：MyRGBPanel
      <MyRGBPanel /> // 渲染 MyRGBPanel 組件
    </div>
  );
}

export default App; // 導出 App 組件
