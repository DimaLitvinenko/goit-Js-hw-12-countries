import './sass/main.scss'
import debounce from 'lodash.debounce'
import countryInfo from './templates/countryInfoTmpl.hbs'
import countriesName from './templates/countriesNameTmpl.hbs'
import showError from './js/notice.js'
import fetchCountries from './js/fetchCountries.js'
import refs from './js/refs.js'

const { inputEl, countriesList, countryCard } = refs;

inputEl.addEventListener('input', debounce(onSearch, 600));

function onSearch() {
  const searchQuery = getSearchQuery();
  // Если запрос пустая строка
  if(!searchQuery) {
    return;
  }
  // Запрос на Rest Countries API
  fetchCountries(searchQuery)
    .then(country => {
      countriesList.innerHTML = ''; 
      countryCard.innerHTML = '';

      if (country.length > 10) {
        return showError('Hey Buddy! Need more letters for searching!');
      } 
      else if (country.length > 1 && country.length < 11) {
        renderCountriesNames(country);
      } 
      else if (country.length === 1) {
        renderCountryCard(country);
      }
    })
    .catch(error => {
      if (error === 404) {
        showError('Oh Dude! Check your device it\'s doesn\’t valid content'); 
      } 
      else {
        showError('Ops! Smothing wrong. Check the field and Try again!');
      }
    });
}

// Получает запрос, введенный в инпут
function getSearchQuery() {
  return inputEl.value;
}

// Рендерит карточку для одной страны
function renderCountryCard(country) {
  const cardMarkup = countryInfo(country);
  countryCard.insertAdjacentHTML('beforeend', cardMarkup);
}

// Рендерит список стран
function renderCountriesNames(country) {
  const namesMarkup = countriesName(country);
  countryCard.insertAdjacentHTML('beforeend', namesMarkup);
}
// if (country.length === 1) {
  //   countryCard.innerHTML = countryInfo(country);
  //   countriesList.innerHTML = '';
  // } else if (country.length > 1 && country.length < 11) {
  //   countriesList.innerHTML = countriesName(country);
  //   countryCard.innerHTML = '';
  // } else if (country.length > 10 ) {
  //   showStackTopLeft('notice')
  // } else if (country.status === 404) {
  //   showStackTopLeft('error')
  // };
// function onFetchError() {
//   showStackTopLeft('error')
// }

//   console.log(typeof window.stackTopLeft === 'undefined');
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
//   console.log(type);
//     if (type === 'error') {
//     return error({
//     title: 'Error',
//     text: 'Couldn\'t process the request you entered!', 
//     destroy: true,  
//     type: 'error', 
//     closer: true,
//     delay: 500,
//   })} else if (type === 'notice') {
//       return notice({
//         text: 'Too many matches found. Enter a more specific query', 
//         destroy: true,  
//         type: 'notice', 
//         closer: true,
//         delay: 1400,
//     });
//   }
//   // PNotify.alert(opts);
// }