const baseUrl = 'https://restcountries.eu/rest/v2/name/';

//

function CheckError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

//

export default {
  fetchCountry(query) {
    const options = {
      headers: {},
    };
    const requestParams = `${query}`;

    return fetch(baseUrl + requestParams, options).then(response =>
      response.json().catch(error => {
        console.log(error);
      }),
    );
  },
};
