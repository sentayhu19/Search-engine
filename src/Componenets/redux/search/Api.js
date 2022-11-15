import axios from 'axios';
import { Search, SearchError, SearchImage } from './action';

const getSearchResults = (key, type) => async (dispatch) => {
  if (key !== '' && key !== undefined) {
    const data = JSON.stringify({
      q: key,
      gl: 'us',
      hl: 'en',
      autocorrect: true,
    });
    if (type === 'web') {
      const config = {
        method: 'post',
        url: 'https://google.serper.dev/search',
        headers: {
          'X-API-KEY': '454d5c1b605cbdd34a0634825a748e51e5099ae8',
          'Content-Type': 'application/json',
        },
        data,
      };
      await axios(config)
        .then((response) => {
          localStorage.setItem('arada_results', JSON.stringify(response.data));
          dispatch(Search(response.data, key));
        })
        .catch((error) => {
          SearchError(error);
        });
    } else {
      console.log('---  Redux API know its image  search');
      const config = {
        method: 'post',
        url: 'https://google.serper.dev/images',
        headers: {
          'X-API-KEY': '454d5c1b605cbdd34a0634825a748e51e5099ae8',
          'Content-Type': 'application/json',
        },
        data,
      };
      await axios(config)
        .then((response) => {
          localStorage.setItem('arada_image', JSON.stringify(response.data));
          dispatch(SearchImage(response.data, key));
        })
        .catch((error) => {
          SearchError(error);
        });
    }
  }
};
// };

export default getSearchResults;
