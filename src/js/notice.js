// import { notice, error } from '@pnotify/core'
// import '@pnotify/core/dist/PNotify.css'
// import '@pnotify/core/dist/BrightTheme.css'

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'

export default function showError(errorMessage) {
  error({
    text: errorMessage,
    delay: 1000,
  });
}

// export default function myNotice() {
//   return fetch(myNotice).then(notification()).catch(errors());
// }

// function notification() {
//   return notice({
//     text: 'Too many matches found. Enter a more specific query', 
//     destroy: true,  
//     type: 'notice', 
//     closer: true,
//     delay: 1400,
//   });
// }

// function errors() {
//   return error({
//     title: 'Error',
//     text: 'Could not process the request you entered!', 
//     destroy: true,  
//     type: 'error', 
//     closer: true,
//     delay: 500,
//   });
// }




