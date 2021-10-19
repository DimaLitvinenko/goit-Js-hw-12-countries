import { notice, defaultModules } from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';
// import * as PNotifyAnimate from '@pnotify/animate';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
import './styles/styles.scss';
import refs from './js/refs'
const { input, results } = refs;

let searchQuery = '';

input.addEventListener('input', debounce(searchQueryBundler, 500));
console.log(input);
function renderCountries(country) {
    if (!country) {
        results.innerHTML = '';
        return
    } else if (country.length === 1) {
        const markup = countryInfo(country);
        results.insertAdjacentHTML('beforeend', markup);
    } else if (country.length <= 10) {
        const markup = countriesList(country);
        results.insertAdjacentHTML('beforeend', markup);
    } else if (country.length > 10) {
        notice('Too many matches found. Please enter a more specific query!');
    } 
};

function searchQueryBundler(e) {
    results.innerHTML = '';
    searchQuery = input.value.trim();
    if (!searchQuery) {
        return
    };
    console.log(searchQuery);
    fetchCountries(searchQuery).then(renderCountries)
};


// import './js/weatherWidget'
// import './js/galleryImages'