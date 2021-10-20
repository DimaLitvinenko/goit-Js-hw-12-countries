import './sass/main.scss';
import debounce from 'lodash.debounce';
import myNotice from './js/notice.js';
import countriesTeampl from './templates/countriesInfo.hbs';
import countriesCardTpempl from './templates/countriesList.hbs';
import API from './js/fetchCountries.js';
import refs from './js/refs.js';
const { searching, countriesList, countryCard } = refs;

searching.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  const searchQuery = event.target.value;

  if (searchQuery === '') {
    countriesList.innerHTML = '';
    countryCard.innerHTML = '';
    return;
  }

  return API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(error => console.log(error));
}

function renderCountryCard(country) {
  if (country.length === 1) {
    countryCard.innerHTML = countriesCardTpempl(country);
    countriesList.innerHTML = '';
  } else if (country.length > 1 && country.length < 11) {
    countriesList.innerHTML = countriesTeampl(country);
    countryCard.innerHTML = '';
  } else if (country.length > 10) {
    myNotice();
  }
}