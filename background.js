chrome.commands.onCommand.addListener((command) => {
  if (command === "open_url") {
    chrome.tabs.create({ url: "https://keep.google.com/u/0/#home" });
  }
});
