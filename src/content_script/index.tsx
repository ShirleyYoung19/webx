import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

// @ts-ignore
__webpack_require__.l = async (url: string, done: Function) => {
  await import(/*webpackIgnore: true*/ url);
  done();
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
