import Axios from "axios";
import {Field, reduxForm} from "redux-form";
import {Input} from "../utils/validators/formcontrols";
import {required} from "../utils/validators/validator";

const AdminForm = (props) => {
    return(
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
                <button type="submit"> Dodaj produkt </button>
            </div>
        </form>


    )
}


const ReduxAddProduct = reduxForm({
    form: 'add_product'
})(AdminForm)

const Admin = (props) =>
{

    const onSubmit = async(formData) =>{
    try{
        await Axios.post('http://localhost:3001/addproduct', {
            nameState:formData.nameState,
            descState:formData.descState,
            priceState:formData.priceState,
            isavailableState:formData.isavailableState,
            imageState:formData.imageState,
            categoryidState:formData.categoryidState,
            isMetric: formData.isMetric
        }).then((response) => {alert(response.data)})
    }catch(err){console.log(err)}
    }

    return (
        <div className="Admin">
        <ReduxAddProduct onSubmit={onSubmit}/>
        </div>

    )
        
}

export default Admin;
