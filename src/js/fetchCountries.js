
const BASE_URL = 'https://restcountries.com/v2';

export default function fetchCountries(searchQuery) {
    const request = `${searchQuery}`;
    return fetch (BASE_URL + /name/ + request)
    .then(response => response.json())
}
//   return fetch(`${BASE_URL}/name/${searchQuery}`)
//   .then(data => {
//     console.log(`response`, data);
//     if (response.ok) {
//       return data.json()
//     } else if (data.status === 404) {
//       throw new Error(data.status)
//     } 
//   })
//   .catch(error => console.warn('Error!', error));
// }  