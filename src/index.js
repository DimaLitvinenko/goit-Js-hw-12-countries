import './sass/main.scss'
import debounce from 'lodash.debounce'
import myNotice from './js/notice.js'
import countryInfo from './templates/countryInfoTmpl.hbs'
import countriesName from './templates/countriesNameTmpl.hbs'
import API from './js/fetchCountries.js'
import refs from './js/refs.js'
const { searchForm, countriesList, countryCard } = refs;

searchForm.addEventListener('input', debounce(onSearch, 500));

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
    .catch(onFetchError);
    // .finally(() => searchForm.reset());
}

function renderCountryCard(country) {
  console.log(country);
  console.log(country.length);

  if (country.length === 1) {
    countryCard.innerHTML = countryInfo(country);
    countriesList.innerHTML = '';

  } else if (country.length > 1 && country.length < 11) {
    countriesList.innerHTML = countriesName(country);
    countryCard.innerHTML = '';

  } else if (country.length > 10) {
    myNotice();
  }
}

function onFetchError(country) {
  if(!country.status === 404) {
    return;
  }
  return myNotice();
}