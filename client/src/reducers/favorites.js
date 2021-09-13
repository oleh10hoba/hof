const initialState = {
    isReady: true,
    items: null,
};

 const favorites = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}

export default favorites