import axios from "axios";

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
        case 'ADD_FAVORITES':
            axios.post('http://localhost:3001/addFavourites', {
                userId: localStorage.getItem("id"),
                productId: action.payload.id
            });
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'REMOVE_FAVORITES':
            axios.post('http://localhost:3001/addFavourites', {
                userId: localStorage.getItem("id"),
                productId: action.payload.id
            });
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload.id)
            };

        default:
            return state;
    }
}

export default favorites