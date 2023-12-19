// // popup.js
// document.addEventListener('DOMContentLoaded', function () {
//   const userInputElement = document.getElementById('userInput');
//   const submitBtn = document.getElementById('submitBtn');

//   submitBtn.addEventListener('click', function () {
//     const userInput = userInputElement.value;
//     console.log(userInput);

//     // Send a message to the content script to log the input to the console of the current page.
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       const activeTab = tabs[0];
//       chrome.tabs.sendMessage(activeTab.id, { action: 'logInput', userInput: userInput });
//     });
//   });
// });

// popup.js
document.addEventListener('DOMContentLoaded', function () {
  const userInputElement = document.getElementById('userInput');
  const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', function () {
    const userInput = userInputElement.value;
    console.log('User Input:', userInput);

    // Send a message to the background script
    chrome.runtime.sendMessage({ action: 'logInput', userInput: userInput });
  });
});
