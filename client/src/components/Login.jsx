import React, {useState} from 'react'
import {Field, reduxForm} from "redux-form";
import  {required} from "../utils/validators/validator"
import {Input} from "../utils/validators/formcontrols";
import Axios from 'axios'
import {login} from "../actions/auth"


const FormLogin = (props) =>
{
    return (
        <div className="ui fluid card">
            <div className="content">
        <form className="ui form" onSubmit={props.handleSubmit}>
            <div className="field">
                <label>Login</label>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={required} />
            </div>
            <div className="field">
                <label>Password</label>
                <Field placeholder={"Password"} type="password" name={"password"} component={Input} validate={required}/>
            </div>
            <div>
                <button  
                    type="submit"
                    id="Waski"
                    className="ui primary labeled icon button">
                    <i className="unlock alternate icon"></i>
                    ZALOGUJ
                </button>
            </div>
        </form>
            </div>
        </div>
    )

}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(FormLogin)

const Login = (props) => {

    const  [responseData,setResponse] = useState("")

    const onSubmit = async(formData) =>{
        const data = {
           login: formData.login,
           password: formData.password
        }
        login(data).then((response) => {
            if(response === false){
                setResponse("Nie poprawnie wprowadzone dane")
            }
            else setResponse("")
        })

    }

    return (
        <div className="Login">
        <h1>Login</h1>
        <ReduxLoginForm isLogged={props.isLogged}  onSubmit={onSubmit}/>
        {responseData === "" ? "" : <div className="ui warning message"><p>{responseData}</p></div>}
        </div>
    )
}

export default Login;