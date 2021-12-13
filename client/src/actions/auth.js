import {GET_AUTH,USERS_ERROR} from './types';
import axios from 'axios';


export const getAuth = () => async dispatch => {

    try{
        const res = await  axios.get('http://localhost:3001/isAuth', {
            headers:{
                "access-token": localStorage.getItem("jwtToken")
            }
        })

        dispatch( {
            type: GET_AUTH,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const setLogin = (login) => ({
    type: 'SET_LOGIN',
    payload: login
});

export const setLogout = (logout) => ({
    type: 'SET_LOGOUT',
    payload: logout
});

export function logout() {
        localStorage.removeItem('jwtToken');
        window.location.reload(false);
        
}




