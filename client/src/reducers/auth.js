import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    isLogged: false,
    user: {}
};

const auth = (state = initialState, action = {}) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                isAuthenticated: !isEmpty(action.user),
                isLogged: !isEmpty(action.user),
                user: action.user
            };
        default: return state;
    }
}

export default auth