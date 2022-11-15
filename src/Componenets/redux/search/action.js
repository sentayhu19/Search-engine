import {
  SEARCH, SEARCHERROR, SEARCHLOADING, SEARCHIMAGE,
} from './type';

export const Search = (payload, key) => ({
  type: SEARCH,
  payload,
  key,
});

export const SearchError = (payload) => ({
  type: SEARCHERROR,
  payload,
});

export const SearchLoading = () => ({
  type: SEARCHLOADING,
});

export const SearchImage = (payload, key) => ({
  type: SEARCHIMAGE,
  payload,
  key,
});
