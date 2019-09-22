const initialState = {
    selectedBook : {
        title : '',
        description : '',
        poster : '',
    },
    imdbRating : ''
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_DATA" : 
                state.selectedBook=action.payload;
                return state;
        default:
            return state;
    }
    
};
export default rootReducer;