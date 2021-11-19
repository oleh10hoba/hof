import Axios from "axios";
import {Field, reduxForm} from "redux-form";
import {Input} from "../utils/validators/formcontrols";
import {required} from "../utils/validators/validator";
import {useState} from "react";
import { useHistory } from "react-router-dom";



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
                <Field placeholder={"Numer telefonu"} name={"mobileState"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Ulica"} name={"addressState"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Nr Domu"} name={"houseState"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Nr mieszkania"} name={"flatState"}component={Input}/>
            </div>
            <div>
                <button type="submit" id="Waski" className="checkout-btn"> Zarejestruj mnie </button>
            </div>
        </form>


    )
}


const ReduxRegistrationForm = reduxForm({
    form: 'registration'
})(RegistrationForm)

const Registration = (props) =>
{
    const history = useHistory();
    const  [responseData,setResponse] = useState("")

    const onSubmit = async(formData) =>{
    try{
        await Axios.post('http://localhost:3001/create', {
            nameState:formData.nameState,
            lastNameState:formData.lastNameState,
            loginState:formData.loginState,
            passwordState:formData.passwordState,
            emailState:formData.emailState,
            mobileState:formData.mobileState,
            addressState:formData.addressState,
            houseState: formData.houseState,
            flatState: formData.flatState
        }).then((response) => {
            if (response.data !== "Success"){
            setResponse(response.data)}
            else {
                setResponse("")
                history.push('/login')
            }
        })
    }catch(err){console.log(err)}
    }

    return (
        <div className="Registration">
            <h1>Rejestracja</h1>
            <ReduxRegistrationForm onSubmit={onSubmit}/>
                {responseData === "" ? "" : <div className="ui warning message"><p>{responseData}</p></div>}


        </div>

    )
        
}

export default Registration;
