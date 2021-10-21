const initialState = {
    items: null
};

const history = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
}

export default history