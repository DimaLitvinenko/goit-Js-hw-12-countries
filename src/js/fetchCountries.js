const BASE_URL = 'https://restcountries.com/v2';


function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/name/${searchQuery}`)
  .then(response => {
    // console.log(response);
    if(response.status === 200) {
      return response.json()
    } else {
      throw new Error(response.status)
    }
  })
  .then(data => {
    if(data.status === 404) {
      throw new Error(data.status)
    } else {
      return data;
    }
  })
  .catch(error => console.log('Error!', error));
}

export default  { fetchCountries };

     