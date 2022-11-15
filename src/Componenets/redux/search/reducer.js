import {
  SEARCH, SEARCHERROR, SEARCHLOADING, SEARCHIMAGE,
} from './type';

const initState = {
  searchResults: [],
  Savedkey: null,
  searcherror: 0,
  loading: false,
  imageresults: [],
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchResults: action.payload,
        Savedkey: action.key,
        loading: false,
      };
    case SEARCHERROR:
      return {
        ...state,
        searcherror: 1,
        loading: false,
      };
    case SEARCHLOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCHIMAGE:
      return {
        ...state,
        imageresults: action.payload,
        Savedkey: action.key,
        loading: false,
      };
    default:
      return state;
  }
};
export default searchReducer;
