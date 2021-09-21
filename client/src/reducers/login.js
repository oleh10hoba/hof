const initialState = {
    isLogged: true
};

const logging = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_LOGGED':
            console.log("Logging:    Ciuda da:")
            return {
                ...state,
                // isLogged: true
                isLogged: action.payload
            };
        default:
            return state;
    }
}

export default logging