if (__DEV__) {
  globalThis.window = {
    // @ts-ignore
    location: {
      reload: () => {
        chrome.runtime.reload();
      },
    },
  };
}

console.log("I am background", {});
