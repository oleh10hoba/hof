import React from 'react'
import {Field, reduxForm} from "redux-form";
import  {required} from "../utils/validators/validator"
import {Input} from "../utils/validators/formcontrols";
import {setUser} from "../actions/Login";


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

const Login = ({setUser}, ...props) => {


    const onSubmit = (formData) =>{
    console.log(formData)
    }

return (
    <div className="Login">
    <h1>Login</h1>
    <ReduxLoginForm isLogged={props.isLogged} onSubmit={onSubmit}/>
    </div>
)
}

export default Login;