const initialState = {
    isReady: false,
    items: null,
};

const account = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACCOUNT':
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

export default account