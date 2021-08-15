import Axios from "axios";
import {useState} from "react";


const Registration = () =>
{
    const [nameState,setNameState] = useState('');
    const [lastNameState,setLastNameState] = useState('');
    const [loginState,setLoginState] = useState('');
    const [passwordState,setPasswordState] = useState('');
    const [emailState,setEmailState] = useState('');
    const [mobileState,setMobileState] = useState('');

   const RegUser = (event) => {
       event.preventDefault();

       Axios.post('http://localhost:3001/check',{
            loginState:loginState,
           emailState:emailState
       }).then((data) => {
            if(data.data.length > 0){
                alert('Użytkownik już istnieje')
                return
            }

       })

       Axios.post('http://localhost:3001/create', {
           nameState:nameState,
           lastNameState:lastNameState,
           loginState:loginState,
           passwordState:passwordState,
           emailState:emailState,
           mobileState:mobileState
       }).then(() => {console.log('Success')})


}


    return (
        <div className="Registration">
            <form>
                <label>Imię</label>
                <input placeholder={"Imię"} onChange={(event => {setNameState(event.target.value)})} type = {"text"}/><br/>
                <label>Nazwisko</label>
                <input placeholder={"Nazwisko"} onChange={(event => {setLastNameState(event.target.value)})}/><br/>
                <label>Login</label>
                <input placeholder={"Login"} onChange={(event => {setLoginState(event.target.value)})} type = {"text"}/><br/>
                <label>Password</label>
                <input placeholder={"Password"} type = {"password"} onChange={(event => {setPasswordState(event.target.value)})}/><br/>
                <label>e-mail</label>
                <input placeholder={"e-mail"} onChange={(event => {setEmailState(event.target.value)})} type = {"text"}/><br/>
                <label>Numer telefonu</label>
                <input placeholder={"Numer telefonu"} onChange={(event => {setMobileState(event.target.value)})} type = {"text"}/><br/>
                <button onClick={RegUser}>Akceptuj</button>
            </form>
        </div>

    )
        
}

export default Registration;