import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from "./js/fetchCountries";
import { debounce, throttle } from 'lodash';


const DEBOUNCE_DELAY = 300;
