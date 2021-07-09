const initialState = {
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
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