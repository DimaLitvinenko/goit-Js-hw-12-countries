import { notice, error } from '@pnotify/core'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'

export default function myNotice() {
  return fetch(myNotice).then(notification()).catch(errors());
};

function notification() {
  return notice({
    text: 'Too many matches found. Enter a more specific query', 
    destroy: true,  
    type: 'notice', 
    closer: true,
    delay: 1400,
  });
}

function errors() {
  return error({
    title: 'Error',
    text: 'Could not process the request you entered!', 
    destroy: true,  
    type: 'error', 
    closer: true,
    delay: 500,
  });
}

// function showStackTopLeft(type) {
  //   if (typeof window.stackTopLeft === 'undefined') {
  //     window.stackTopLeft = new PNotify.Stack({
  //       dir1: 'down',
  //       dir2: 'right',
  //       firstpos1: 25,
  //       firstpos2: 25,
  //       push: 'top',
  //       maxStrategy: 'close'
  //     });
  //   }
  //   const opts = {
  //     title: 'Over Here',
  //     text: "Check me out. I'm in a different stack.",
  //     stack: window.stackTopLeft
  //   };
  //   switch (type) {
  //     case 'error':
  //       opts.title = 'Oh No';
  //       opts.text = 'Watch out for that water tower!';
  //       opts.type = 'error';
  //       break;
  //     case 'info':
  //       opts.title = 'Breaking News';
  //       opts.text = 'Have you met Ted?';
  //       opts.type = 'info';
  //       break;
  //     case 'success':
  //       opts.title = 'Good News Everyone';
  //       opts.text =
  //         "I've invented a device that bites shiny metal asses.";
  //       opts.type = 'success';
  //       break;
  //   }
  //   PNotify.alert(opts);
  // }


