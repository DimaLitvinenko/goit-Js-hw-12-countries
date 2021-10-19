import { notice, defaultModules } from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';
// import * as PNotifyAnimate from '@pnotify/animate';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
import refs from './refs'
const { input } = refs;

// defaultModules.set(PNotifyMobile, {});
// alert({
//     text: 'Notice me, senpai!'
//   });


export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v3/name/${searchQuery}`)
    .then(response => {
        if (response.ok) return response.json();
        throw new notice(`NOT FOUND: ERROR ${response.status}`);
    })
    .catch(error => { 
        setTimeout(() => { 
            input.value = ''; 
        }, 3000)
        console.log(error);
    })
};
     