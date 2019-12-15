import debounce from '../node_modules/lodash.debounce/index.js';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';

const list = document.querySelector('.js-list');
const countryContainer = document.querySelector('.js-country-container');
const input = document.querySelector('.js-input');

input.addEventListener(
  'input',
  debounce(e => fetchCountries(e), 500),
);

const fetchCountries = e => {
  const { value } = e.target;
  if (!value) return;
  fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      return result;
    })
    .then(result => updateUI(result));
};

const updateUI = countries => {
  const length = countries.length;
  list.innerHTML = '';
  countryContainer.innerHTML = '';
  if (length === 1) {
    const country = countries[0];
    const { name, capital, population, languages, flag } = country;
    const getLanguages = () =>
      languages.map(language => `<li>${language.nativeName}</li>`).join('');

    countryContainer.innerHTML = `
        <h1>${name}</h1>
        <h2>Capital: ${capital}</h2>
        <p>Population: ${population}</p>
        <ul>Languages: ${getLanguages()}</ul>
        <object id="svg-object" data="${flag}" type="image/svg+xml"></object>
        `;
  } else if (length >= 2 && length <= 10) {
    const lis = countries.map(country => `<li>${country.name}</li>`).join('');
    list.innerHTML = lis;
  } else
    PNotify.error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
};
