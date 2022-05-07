export function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
      .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
         return response.json();
      });
};
// https://restcountries.com/v2/name/${all}?fields=name,capital,population,flag,languages
// https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages
