import { SEARCH, SEARCHERROR } from "./type";

export const Search = (payload) => ({
    type: SEARCH,
    payload,
    })

export const SearchError = (payload) => ({
type: SEARCHERROR,
payload,
})