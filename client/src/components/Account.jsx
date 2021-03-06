import React from 'react';
import Axios from "axios";
import {Field, reduxForm} from "redux-form";
import {Input} from "../utils/validators/formcontrols";
import {required} from "../utils/validators/validator";
import {Link} from "react-router-dom";

const ChangeAddressForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Ulica"} name={"addressState"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Nr domu"} name={"houseState"} component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder={"Nr mieszkania"} name={"flatState"}component={Input}/>
            </div>
            <div>
                <button  className="checkout-btn2" type="submit"> Zmień adres </button>
            </div>
        </form>
    )
}

const ReduxChangeAddressForm = reduxForm({
    form: 'changeaddress'
})(ChangeAddressForm)

const Account = data => {
    const onSubmit = async(formData) =>{
        try{
            await Axios.post('http://localhost:3001/changeAddress', {
                addressState:formData.addressState,
                houseState: formData.houseState,
                flatState: formData.flatState,
                idState:data.id,
            }).then((response) => {alert(response.data);window.location.reload(false);})
        }catch(err){console.log(err)
        }
    }
    return(
        <div className='Account'>
            <div>
                <h2>{data.first_name} {data.last_name}</h2>
            </div>
            <div>
                <h2>{data.email}</h2>
            </div>
            <div>
                <h2>Telefon:    {data.mobile}</h2>
            </div>
            <div>
                <h2>Adres dostawy: {data.delivery_address}</h2>
                <div className="">
                    <h3>Zmieniamy adres dostawy?</h3>
                    <ReduxChangeAddressForm onSubmit={onSubmit}/>
                </div>
            </div>
            <Link to={{pathname:'/history'}}>Historia zamówień</Link>
        </div>
    );
};

export default Account;
