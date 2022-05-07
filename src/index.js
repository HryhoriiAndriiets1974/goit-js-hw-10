import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from "./js/fetchCountries";
import { debounce, throttle } from 'lodash';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
const countryEl = document.querySelector('.country-list');
const infoEl = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(e => {
  e.preventDefault();
}, DEBOUNCE_DELAY));

function showCountries(countries) {
  countryEl.innerHTML = '';
  infoEl.innerHTML = '';
  if (countries.length > 10) {
    return Notify.info('Too many matches found. Please enter a more specific name.');
  };
  if (countries.length >= 2) {
    markupCountries(countries);
  };
  markupCountry(countries);
};

function markupCountries(countries) {

};

function markupCountry(countries) {

};
