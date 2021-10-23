import debounce from 'lodash.debounce'
import 'material-design-icons/iconfont/material-icons.css'
import './sass/main.scss'

import countryInfo from './templates/countryInfoTmpl.hbs'
import countriesName from './templates/countriesNameTmpl.hbs'

import showError from './js/onNotice.js'
import fetchCountries from './js/fetchCountries.js'
import refs from './js/refs.js'
const { inputEl, countryCard } = refs;

inputEl.addEventListener('input', debounce(onSearch, 800));

function onSearch({ target }) {
  clearCountries();
  const searchQuery = target.value;

  if (!searchQuery) {      // Если запрос пустая строка
    return;
  }
  fetchCountries(searchQuery)    // Запрос на Rest Countries API
  .then(data => {
    if (data.length > 10) {
      showError(
        `Too many matches found! Please enter more specific query!`
      );
    } else if (data.status === 404) {
      showError(
        'Error! Country not found!'
      );
    } else if (data.length === 1) {
      renderCountryCard(data);
    } else if (data.length > 1 && data.length < 11) {
      renderCountriesNames(data);
    } else if (data.statusText !== "OK") {
      showError(
        'Query Not found!'
      )
    }
  })
}

function renderCountryCard(data) {     // Рендерит карточку для одной страны
  const cardMarkup = countryInfo(data);
  countryCard.insertAdjacentHTML('beforeend', cardMarkup);
}

function renderCountriesNames(data) {   // Рендерит список стран
  const namesMarkup = countriesName(data);
  countryCard.insertAdjacentHTML('beforeend', namesMarkup);
}

function clearCountries() {
  countryCard.innerHTML = '';
}