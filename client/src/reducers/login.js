const initialState = {
    isLogged: false
};

const logging = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_LOGGED':
            return {
                ...state,
                isLogged: action.payload
            };
        default:
            return state;
    }
}

export default logging