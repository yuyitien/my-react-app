import { render, screen } from '@testing-library/react'; // 從 @testing-library/react 引入 render 和 screen
import App from './App'; // 引入 App 組件

test('renders learn react link', () => {
  render(<App />); // 渲染 App 組件
  const linkElement = screen.getByText(/learn react/i); // 查找包含 "learn react" 文字的元素（不區分大小寫）
  expect(linkElement).toBeInTheDocument(); // 期望該元素存在於文檔中
});
