import { Search, SearchError } from "./action";
import axios from 'axios'

export const getSearchResults =  (key) => async (dispatch) => {
  if (key!=="" && key!==undefined) {
    console.log("SEARCH started", key)
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
      'X-API-KEY': "API", 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  await axios(config)
  .then((response) => {
    dispatch(Search(response.data))
  })
  .catch((error) => {
    SearchError(error);
  });
}
}