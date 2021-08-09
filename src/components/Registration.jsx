import Axios from "axios";
import {useState} from "react";


const Registration = () =>
{

    const [loginstate,setloginstate] = useState('');

    const [passwordstate,setpasswordstate] = useState('');


   const RegUser = (event) => {
       event.preventDefault();
       console.log(loginstate);
       Axios.post('http://localhost:3001/create', {
           loginstate:loginstate,
           passwordstate:passwordstate
       }).then(() => {console.log('Success')})
}


    return (
        <div>
            <form>
            <label>Login</label>
            <input placeholder={"Login"} onChange={(event => {setloginstate(event.target.value)})} type = {"text"}/>
            <label>Password</label>
            <input placeholder={"Password"} type = {"password"} onChange={(event => {setpasswordstate(event.target.value)})}/>
            <button onClick={RegUser}>Akceptuj</button>
            </form>
        </div>

    )

}

export default Registration;