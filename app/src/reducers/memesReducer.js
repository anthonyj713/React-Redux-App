const initialState = {
    meme: '',
    isFetching: false,
    error: ''
};

export const memesReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FETCH_MEME_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_MEME_SUCCESS':
            return {
                ...state,
                isFetching: false,
                meme: action.payload,
                error: ''
            };
        case 'FETCH_QUOTE_FAIL':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default: return state;
    }
}

