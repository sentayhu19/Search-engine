import { SEARCH, SEARCHERROR } from "./type";

const initState = {
searchResults: [],
Savedkey: ''
};

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH:
            console.log("Search reducer", action.payload);
            return { 
                searchResults: action.payload,
                Savedkey: action.key,
            };
        default:
            return state;
    }
    
}
export default searchReducer;
