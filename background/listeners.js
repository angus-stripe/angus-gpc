chrome.scripting.registerContentScripts([
  {
    id: "2",
    matches: ["<all_urls>"],
    excludeMatches:["https://example.com/"],
    js: ["content-scripts/registration/gpc-dom.js"],
    runAt: "document_start"
  }
]);
