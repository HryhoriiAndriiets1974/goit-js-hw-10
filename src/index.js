import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from "./js/fetchCountries";
import { debounce, throttle } from 'lodash';

import countryCard from './templates/country.hbs';
import countriesList from './templates/countries.hbs';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
const countryEl = document.querySelector('.country-list');
const infoEl = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(e) {
  e.preventDefault();
  const name = searchBox.value.trim();
  if (name) {
    return fetchCountries(name)
    .then(showCountries)
    .catch(error);
  } else clearInput();
};

function showCountries(countries) {
  clearInput();
  if (countries.length > 10) {
    return Notify.info('Too many matches found. Please enter a more specific name.');
  };
  if (countries.length >= 2) {
    markupCountries(countries);
  };
  if (countries.length === 1) {
    markupCountry(countries);;
  };
};

function markupCountries(countries) {
  const markup = countriesList(countries);
  countryEl.insertAdjacentHTML('beforeend', markup);
};

function markupCountry(countries) {
  const markup = countryCard(countries);
  infoEl.insertAdjacentHTML('beforeend', markup);
};

function clearInput() {
  countryEl.innerHTML = '';
  infoEl.innerHTML = '';
};

function error(){
  return Notify.failure('Oops, there is no country with that name', {timeout: 5000});
};
