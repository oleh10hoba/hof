const initialState = {
    isReady: false,
    items: null,
    filterBy: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case 'SET_FILTER':
            return {
                ...state,
                items: action.payload,
                filterBy: true
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
            break;
    }
}