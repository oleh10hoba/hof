

const initialState = {
    items: []
};

const cart = (state = initialState, action) => {
    switch (action.type){
        case 'SET_CART':
            return {
                ...state,
                items: action.payload
            };
        case 'ADD_PRODUCT_TO_CART':
            ;return {
            ...state,
            items: [...state.items, action.payload]
        }
        case 'SUB_PRODUCT_FROM_CART':
            const removeIndex = state.items.findIndex( item => item.id === action.payload );
            state.items.splice( removeIndex, 1 )
            return {
                ...state,
                items: state.items
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