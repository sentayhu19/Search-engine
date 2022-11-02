import { SEARCH, SEARCHERROR } from "./type";

export const Search = (payload, key) => ({
    type: SEARCH,
    payload,
    key,
    })

export const SearchError = (payload) => ({
type: SEARCHERROR,
payload,
})