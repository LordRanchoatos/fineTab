// // runs when a new tab is created
// chrome.tabs.onCreated.addListener(function (tab) {
//   console.log('A new tab was created!!!!');
//   // send a message to content script that a new tab is created
//   (async () => {
//     const response = await chrome.runtime.sendMessage(
//       { greeting: 'hello' },
//       () => console.log('message sent')
//     );
//     // do something with response here, not outside the function
//     console.log(response);
//     console.log('message ');
//   })();
// });

// background.js

// // Runs when a new tab is created
// chrome.tabs.onCreated.addListener(function (tab) {
//   console.log('A new tab was created!!!!');

//   // Wait until the tab is fully loaded
//   chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, updatedTab) {
//     if (tabId === tab.id && changeInfo.status === 'complete') {
//       // Send a message to the content script that a new tab is created
//       chrome.tabs.sendMessage(
//         tabId,
//         { greeting: 'hello', taburi: tab.url },
//         function (response) {
//           console.log('Response from content script:', response);
//         }
//       );
//     }
//   });
// });
// Runs when a new tab is created

const fetchDadJokes = async (limit) => {
  const url = `https://api.api-ninjas.com/v1/quotes?category=inspirational`;
  const apiKey = 'I6sG6mpH2S3qpqDtke4muQ==K0F5hdQBBRaUKCLU';

  try {
    const response = await fetch(url, {
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${await response.text()}`);
    }

    const data = await response.json();
    console.log(data);
    chrome.storage.local.set({ quote: data[0] }).then(() => {
      console.log('Value is set');
    });
  } catch (error) {
    console.error('Request failed:', error);
  }
};

chrome.tabs.onCreated.addListener(function (tab) {
  console.log('A new tab was created!!!!');

  // Wait until the tab is fully loaded
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, updatedTab) {
    if (tabId === tab.id && changeInfo.status === 'complete') {
      fetchDadJokes(3);

      chrome.tabs.sendMessage(
        tabId,
        { greeting: 'hello', taburi: tab.url },
        function (response) {
          console.log('Response from content script:', response);
        }
      );
    }
  });
});
