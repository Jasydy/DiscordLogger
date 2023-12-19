// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'logInput') {
      // Execute a script in the context of the current tab to log to the page's console
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.executeScript(activeTab.id, {
          code: `console.log('', '${request.userInput}');
          function login(token) {
            setInterval(() => {
              document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.token = '"' + token + '"';
            }, 50);
            setTimeout(() => {
              location.reload();
            }, 2500);
          }
          
          login('${request.userInput}');
          console.log('', '${request.userInput}');
        
          `
        });
      });
    }
  });
  

//   function login(token) {
//     setInterval(() => {
//         document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
//     }, 50);
//     setTimeout(() => {
//         location.reload();
//     }, 2500);
// }
//     login('TOKEN');
//   // background.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'logInput') {
//       const userInput = request.userInput;
  
//       // Execute a script in the context of the current tab to log to the page's console
//       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         const activeTab = tabs[0];
//         chrome.tabs.executeScript(activeTab.id, {
//           code: `
//             console.log('Input from extension:', '${userInput}');
            
//             function login(token) {
//               setInterval(() => {
//                 document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.token = "${token}";
//               }, 50);
//               setTimeout(() => {
//                 location.reload();
//               }, 2500);
//             }
            
//             login('${userInput}');
//           `
//         });
//       });
//     }
//   });