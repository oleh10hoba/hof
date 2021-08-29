const initialState = {
    items: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACCOUNT':
            return {
                ...state,
                items: action.payload
            };
        
        default:
            return state;
    }
}