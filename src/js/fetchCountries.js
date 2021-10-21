
const BASE_URL = 'https://restcountries.com/v2';

export default function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/name/${searchQuery}`)
  .then(response => {
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
//       return response.json()
//     })
//   .then(result => {
//     if(result.status === 404) {
//       error({
//         type: 'error',
//         text: 'Oh Dude! I couldn\'t find anything'
//       })
//     }
//     return result
//   })
//   .catch(error => {
//     console.log('Error!', error);
//   });
// }


     