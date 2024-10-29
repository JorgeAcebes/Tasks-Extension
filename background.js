chrome.commands.onCommand.addListener((command) => {
  if (command === "open_url") {
    chrome.tabs.create({ url: "https://calendar.google.com/calendar/u/0/r/tasks?tab=rc" });
  }
});
