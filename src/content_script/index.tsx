import { useEffect } from "react";
import { createRoot } from "react-dom/client";
interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = ({ className }) => {
  return <div style={{ width: "200px" }}>我是你第一个插件的注入</div>;
};

const root = document.createElement("div");
document.body.append(root);

createRoot(root).render(<App />);
