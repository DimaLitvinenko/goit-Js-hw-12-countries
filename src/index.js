import './sass/main.scss';
import debounce from 'lodash.debounce';
import myNotice from './js/notice.js';
import countriesTeampl from './templates/countriesInfo.hbs';
import countriesCardTpempl from './templates/countriesList.hbs';
import API from './js/fetchCountries.js';
import refs from './js/refs.js';
const { searching, countriesList, countryCard } = refs;

searching.addEventListener('input', debounce(onSearch, 1000));

function onSearch({ target }) {
  const searchQuery = target.value;
    console.log(searchQuery);

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
    countryCard.innerHTML = countriesTeampl(country);
    countriesList.innerHTML = '';
  } else if (country.length > 1 && country.length < 11) {
    countriesList.innerHTML = countriesCardTpempl(country);
    countryCard.innerHTML = '';
  } else if (country.length > 10) {
    myNotice();
  }
}