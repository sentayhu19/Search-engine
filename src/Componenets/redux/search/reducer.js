import { SEARCH, SEARCHERROR } from "./type";

const initState = {
searchResults: []
};

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH:
            return action.payload;
        default:
            return state;
    }
    
}
export default searchReducer;
