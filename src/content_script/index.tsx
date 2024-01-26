import { useEffect } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={"title"} style={{ width: "200px" }}>
      我是你第一个插件的注入
    </div>
  );
};

const root = document.createElement("div");
const shadowRoot = root.attachShadow({ mode: "open" });

const cssUrl = chrome.runtime.getURL("static/css/content_script.css");

fetch(cssUrl)
  .then((response) => response.text())
  .then((cssContent) => {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(cssContent);
    shadowRoot.adoptedStyleSheets = [styleSheet];
  });

document.body.append(root);
createRoot(shadowRoot).render(<App />);
