import { Search, SearchError } from "./action";
import axios from 'axios'


export const getSearchResults = () => (dispatch) => {
  console.log("SEARCN STARTED ------------------ ");
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
      params: {q: 'taylor swift', pageNumber: '1', pageSize: '10', autoCorrect: 'true'},
      headers: {
        'X-RapidAPI-Key': '0a632a57aamsh1f8242879ce4ecfp1a7230jsnfa28d8ec3311',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    console.log("REQUESTING.................");
    axios.request(options).then(function (response) {
        console.log("SEARCH RESULT: ",response.data);
        dispatch(Search(response.data));
    }).catch(function (error) {
        dispatch(SearchError(error))
        console.error(error);
    });
}