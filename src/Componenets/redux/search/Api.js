import { Search, SearchError } from "./action";
import axios from 'axios'

export const getSearchResults =  (key) => async (dispatch) => {
  if (key!=="" && key!==undefined) {
  let data = JSON.stringify({
    "q": key,
    "gl": "us",
    "hl": "en",
    "autocorrect": true
  });
  
  let config = {
    method: 'post',
    url: 'https://google.serper.dev/search',
    headers: { 
      'X-API-KEY': ARADA_KEY, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  await axios(config)
  .then((response) => {
    console.log("SERVER response", response.data);
    localStorage.setItem('arada_results', JSON.stringify(response.data));
    dispatch(Search(response.data, key))
  })
  .catch((error) => {
    SearchError(error);
  });
}
}