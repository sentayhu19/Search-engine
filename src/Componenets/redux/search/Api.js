import axios from 'axios';
import { Search, SearchError } from './action';

const getSearchResults = (key) => async (dispatch) => {
  if (key !== '' && key !== undefined) {
    const data = JSON.stringify({
      q: key,
      gl: 'us',
      hl: 'en',
      autocorrect: true,
    });

    const config = {
      method: 'post',
      url: 'https://google.serper.dev/search',
      headers: {
        'X-API-KEY': ARADA_KEY,
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
  }
};

export default getSearchResults;
