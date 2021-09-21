import axios from 'axios';


// export function setCurrentUser(user) {
//     return {
//         type: "SET_CURRENT_USER",
//         user
//     };
// }

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
}

export const login  = (data) => {
    console.log(data)
        return axios.post('http://localhost:3001/login', { login: data.login, password: data.password}
            ).then(res => {
            if (!res.data.token) {
                alert("Invalid username or password")
                return
            }
            else{
                setLogg(data);
                alert("Succ")
                
            }
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
        });
}