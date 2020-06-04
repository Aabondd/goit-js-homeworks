const baseUrl = 'https://restcountries.eu/rest/v2/name/';

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
