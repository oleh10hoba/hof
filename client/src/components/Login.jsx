import React from 'react'
import {Field, reduxForm} from "redux-form";
import  {required} from "../utils/validators/validator"
import {Input} from "../utils/validators/formcontrols";
import Axios from 'axios'
import {login} from "../actions/auth"
import {logout} from "../actions/auth"


const FormLogin = (props) =>
{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={required} />
            </div>
            <div>
                <Field placeholder={"Password"} type="password" name={"password"} component={Input} validate={required}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>zapamiętaj mnie
            </div>
            <div>
                <button  
                    type="submit"
                    id="Waski" 
                    className="checkout-btn"
                > 
                    ZALOGUJ
                </button>
            </div>
        </form>
    )

}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(FormLogin)

const Login = (props) => {

    const onSubmit = async(formData) =>{
        const data = {
           login: formData.login,
           password: formData.password
        }
        login(data)
    }

    return (
        <div className="Login">
        <h1>Login</h1>
        <ReduxLoginForm isLogged={props.isLogged}  onSubmit={onSubmit}/>    
        </div>
    )
}

export default Login;