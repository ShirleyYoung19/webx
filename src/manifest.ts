const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  version: "1.0.0",
  name: "First Extension",
  action: {
    default_popup: "./html/popup/index.html",
  },
};

export default manifest;
