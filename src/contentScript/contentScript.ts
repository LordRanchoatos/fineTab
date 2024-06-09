// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' });
//   console.log('hellllllllloooooooooo');
// });

// content.js

// Listen for messages from the background script
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   alert(request);

//   // Process the message and send a response back if needed
//   if (request.greeting === 'hello') {
//     alert(request.taburi);
//     sendResponse({ farewell: 'goodbye' });
//   }
// });

// alert('from content script');
// console.log('from content script');
// // Runs when a new tab is created
// chrome.tabs.onCreated.addListener(function (tab) {
//   console.log('A new tab was created!!!!');

//   // Wait until the tab is fully loaded
//   chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, updatedTab) {
//     if (tabId === tab.id && changeInfo.status === 'complete') {
//       // Send a message to the content script that a new tab is created
//       alert('new tab created');
//       console.log(tabId);
//     }
//   });
// });

// alert('from content script');
// document.body.style.backgroundColor = 'red';
// const page = document.getElementsByName('body')[0];
// page.style.backgroundColor = 'red';
// console.log(page);
