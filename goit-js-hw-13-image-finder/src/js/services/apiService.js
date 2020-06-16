const baseUrl = 'https://pixabay.com/api/';
const key = '17057645-800c0a9b8f77d96e9de1e24f2';

//   'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ';

const imageType = '?image_type=photo&orientation=horizontal';

export default {
  page: 1,
  perPage: 12,
  query: '',
  fetchPictures() {
    const requestParams = `&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${key}`;
    return fetch(baseUrl + imageType + requestParams)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.hits;
      })
      .catch(error => {
        console.log(error);
      });
  },

  get searchQuerry() {
    return this.query;
  },

  set searchQuerry(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
