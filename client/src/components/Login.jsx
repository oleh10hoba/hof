import React from 'react'
import {Field, reduxForm} from "redux-form";
import  {required} from "../utils/validators/validator"
import {Input} from "../utils/validators/formcontrols";
import Axios from 'axios'

const FormLogin = (props) =>
{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={required} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={required}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>
            <div>
                <button  
                    type="submit"
                > 
                    Submit
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
        Axios.post('http://localhost:3001/login', {
           login: formData.login,
           password: formData.password
       }).then((response) => {console.log("Response: ",response)})
    }

    return (
        <div className="Login">
        <h1>Login</h1>
        <ReduxLoginForm isLogged={props.isLogged} onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;