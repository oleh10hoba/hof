import Axios from "axios";
import {Field, reduxForm} from "redux-form";
import {Input} from "../utils/validators/formcontrols";
import {required} from "../utils/validators/validator";

const AdminAdd = (props) => {
    return(
        <div className="Adminka">
            <div className="Admin">
            <h2>Dodanie produktu</h2>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={"name"} name={"nameState"} component={Input} validate={required} />
                    </div>
                    <div>
                        <Field placeholder={"description"} name={"descState"} component={Input} validate={required} />
                    </div>
                    <div>
                        <Field placeholder={"price"} name={"priceState"} component={Input} validate={required}/>
                    </div>
                    <div>
                        <Field placeholder={"isAvailable(0,1)"} name={"isavailableState"} component={Input} validate={required}/>
                    </div>
                    <div>
                        <Field placeholder={"image(url)"} name={"imageState"}component={Input} validate={required}/>
                    </div>
                    <div>
                        <Field placeholder={"category_id"} name={"categoryidState"}component={Input} validate={required}/>
                    </div>
                    <div>
                        <Field placeholder={"Is Metric?"} name={"isMetric"}component={Input} validate={required}/>
                    </div>
                    <div>
                        <Field placeholder={"Ilość"} name={"quantity"}component={Input} validate={required}/>
                    </div>
                    <div>
                        <button type="submit"> Dodaj produkt </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
const AdminRem = (props) => {
    return(
        <div className="Adminka">
            <form onSubmit={props.handleSubmit}>
                <div className="Admin">
                    <h2>Usunięcie produktu</h2>
                    <div>
                        <Field placeholder={"ID"} name={"idState"}component={Input} validate={required}/>
                    </div>
                    <div>
                        <button type="submit"> Usuń produkt o podanym id</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

const ReduxAddProduct = reduxForm({
    form: 'add_product'
})(AdminAdd)
const ReduxRemProduct = reduxForm({
    form: 'rem_product'
})(AdminRem)

const Admin = (props) =>
{
    const onSubmitRem = async(formData) =>{
        console.log('onSubmitRem');
        try{
            await Axios.post('http://localhost:3001/remproduct', {
                idState:formData.idState,
            }).then((response) => {alert(response.data)})
        }catch(err){console.log(err)}
    }

    const onSubmitAdd = async(formData) =>{
        try{
            await Axios.post('http://localhost:3001/addproduct', {
                nameState:formData.nameState,
                descState:formData.descState,
                priceState:formData.priceState,
                isavailableState:formData.isavailableState,
                imageState:formData.imageState,
                categoryidState:formData.categoryidState,
                isMetric: formData.isMetric,
                quantity: formData.quantity
            }).then((response) => {alert(response.data)})
        }catch(err){console.log(err)}
    }

    return (
        <div className="Admin">
            <ReduxAddProduct onSubmit={onSubmitAdd}/>
            <ReduxRemProduct onSubmit={onSubmitRem}/>
        </div>
    )
        
}

export default Admin;
