const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  version: "1.0.0",
  name: "First Extension",
  action: {
    default_popup: "./html/popup/index.html",
  },
  background: {
    service_worker: "./background.js",
  },
  content_scripts: [
    {
      matches: ["https://*/*"],
      js: ["./content_script.js"],
      css: ["./content_script.css"],
      run_at: "document_idle",
    },
  ],
  web_accessible_resources: [
    {
      matches: ["https://*/*"],
      resources: ["content_script.css"],
    },
  ],
};

export default manifest;
