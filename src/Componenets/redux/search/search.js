const axios = require("axios");
export const SEARCH = "search/type/SEARCH";

export const Search = (payload) => ({
    type: SEARCH,
    payload,
    })
export const getSearchResults = () => (dispatch) => {
  console.log("SEARCN STARTED ------------------ ");
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
      params: {q: 'taylor swift', pageNumber: '1', pageSize: '10', autoCorrect: 'true'},
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log("SEARCH RESULT: ",response.data);
        dispatch(Search(response.data));
    }).catch(function (error) {
        console.error(error);
    });
}
const searchReducer = (state = [], action) => {
    switch (action.type) {
        case SEARCH:
            return action.payload;
        default:
            return state;
    }
}
export default searchReducer;
