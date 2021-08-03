import React from 'react'
import {Field, reduxForm} from "redux-form";
import  {required} from "../utils/validators/validator"
import {Input} from "../utils/validators/formcontrols";

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
                <button  type="submit">Submit</button>
            </div>
        </form>
    )

}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(FormLogin)

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData);
    }

return (
    <div>
    <h1>Login</h1>
    <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
)
}

export default Login;