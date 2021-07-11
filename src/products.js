const initialState = {
    isReady: false,
    items: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
            break;
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
            break;
        case 'ADD_PRODUCTS':
            return {
                products: [
                    ...state.products,
                    action.payload
                ]
            };
            break;
    
        default:
            return state;
            break;
    }
}