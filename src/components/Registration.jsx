import Axios from "axios";
import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../utils/validators/formcontrols";
import {required} from "../utils/validators/validator";

const RegistrationForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Imię"} name={"nameState"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Nazwisko"} name={"lastNameState"} component={Input} validate={required} />
            </div>
            <div>
                <Field placeholder={"Login"} name={"loginState"} component={Input} validate={required} />
            </div>
            <div>
                <Field placeholder={"Password"} type = {"password"} name={"passwordState"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"e-mail"} name={"emailState"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Numer telefonu"} name={"mobileState"}component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Adres dostawy"} name={"addressState"}component={Input} validate={required}/>
            </div>
            <div>
                <button type="submit"> Submit </button>
            </div>
        </form>


    )
}


const ReduxRegistrationForm = reduxForm({
    form: 'registration'
})(RegistrationForm)

const Registration = (props) =>
{

    const onSubmit = (formData) =>{
        Axios.post('http://localhost:3001/check',{
            loginState:formData.loginState,
            emailState:formData.emailState
        }).then((data) => {
            if(data.data.length > 0){
                alert('Użytkownik już istnieje')
                return
            }

        })

        Axios.post('http://localhost:3001/create', {
            nameState:formData.nameState,
            lastNameState:formData.lastNameState,
            loginState:formData.loginState,
            passwordState:formData.passwordState,
            emailState:formData.emailState,
            mobileState:formData.mobileState,
            addressState:formData.addressState
        }).then(() => {console.log('Success')})
    }

    return (
        <div className="Registration">
        <ReduxRegistrationForm onSubmit={onSubmit}/>
        </div>

    )
        
}

export default Registration;
