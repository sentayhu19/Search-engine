import { SEARCH, SEARCHERROR } from "./type";

const initState = {
searchResults: [],
Savedkey: '',
searcherror: 0,
};

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH:
            console.log("Search reducer", action.payload);
            return { 
                searchResults: action.payload,
                Savedkey: action.key,
            };
        case SEARCHERROR:
            return {
                searcherror: 1,
            }
        default:
            return state;
    }
    
}
export default searchReducer;
