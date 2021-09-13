const initialState = {
    items: []
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'SUB_PRODUCT_FROM_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'REMOVE_PRODUCT_FROM_CART':
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            };
        default:
            return state;
    }
}

export default cart