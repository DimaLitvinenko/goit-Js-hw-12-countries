const BASE_URL = 'https://restcountries.com/v2';


function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/name/${searchQuery}`)
  .then(response => response.json())
  .catch(() => console.alert('Only letters!'));
}

export default { fetchCountries };

     