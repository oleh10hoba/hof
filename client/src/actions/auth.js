import axios from 'axios';
import {Link} from "react-router-dom";

const setLog = (data) => {
    axios.post('http://localhost:3001/login').then(({ data }) => {
        setLogg(data);
    });
};
export const load = data => ({ type: 'SET_CURRENT_USER', data })
const setLogg = (data) => 
({
    type: 'SET_CURRENT_USER',
    payload: data
});


export function logout() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('id');
        window.location.reload(false);
        alert("Wylogono!!!")
}

export const login  = (data) => {
        return axios.post('http://localhost:3001/login', { login: data.login, password: data.password}
            ).then(res => {
            if (!res.data.token) {
                alert("Invalid username or password")
                return
            }
            else{
                setLog(data);
                alert("Zalogowano!!!")
                
            }
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('userType', res.data.userType);
            window.location.reload(false);
        });
}