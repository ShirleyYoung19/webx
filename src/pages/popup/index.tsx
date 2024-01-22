import { createRoot } from "react-dom/client";
interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = ({ className }) => {
  return <div style={{ width: "200px" }}>我是你第一个插件</div>;
};

createRoot(document.getElementById("root")!).render(<App />);
