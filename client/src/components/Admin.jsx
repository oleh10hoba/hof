import Axios from "axios";
import {Field, reduxForm} from "redux-form";
import {Input} from "../utils/validators/formcontrols";
import {required} from "../utils/validators/validator";
import {Link, Route} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button } from 'semantic-ui-react'

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
                        <button    className="checkout-btn2" type="submit"> Dodaj produkt </button>
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
                        <button className="checkout-btn2" type="submit"> Usuń produkt o podanym id</button>
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


const userTable = (order) => {
    return(
        <table className="ui red table">
            <thead>
                <tr>
                    <th>Imie Osoby</th>
                    <th>Telefon</th>
                    <th>Adres</th>
                    <th>Dostawa</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>{order[0].first_name}</td>
                <td>{order[0].mobile}</td>
                <td>{order[0].delivery_address}</td>
                <td>{order[0].isSelfPickup === 0 ? "Tak" : "Nie"}</td>
            </tr>
            </tbody>
        </table>
    )
}

const orderTable = (orders,getProductsFromOrder) => {
    return (
        <table className="ui red table">
            <thead>
            <tr>
                <th>Status</th>
                <th>Data zamowienia</th>
                <th>Przycisk</th>
            </tr>
            </thead>
            <tbody>
            {orders !== null ? orders.map((order,i) =>
                <tr key ={i}>
                    <td>&nbsp;{order.status}</td>
                    <td>&nbsp;{order.created_at.slice(0, 19).replace('T', ' ')}</td>
                    <td><Link onClick={() => getProductsFromOrder(order.id)} to="/admin/OrderPageInfo">Pokaż zamowienie</Link></td>
                </tr>
            ) : ""}
            </tbody>

        </table>
    )
}

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

    const [orders,setOrders] = useState(null)
    const [ordersDone,setOrdersDone] = useState(null)
    const [order,setOrder] = useState(null)
    const history = useHistory();

      const  GiveOrders = async() =>{
            await Axios.get('http://localhost:3001/getOrdersAll').then((response) => {
                const or = response.data.filter(orders => orders.status === "wykonanie")
                const orD = response.data.filter(orders => orders.status === "wykonane")
                setOrders(or)
                setOrdersDone(orD)

            })
    }


    async function getProductsFromOrder(id) {
        console.log(id)
        axios.post("http://localhost:3001/getProductsFromOrder", {id: id}).then((data) => {
            setOrder(data.data)

        })
    }

        async function closeOrder(id){
            console.log(id)
            axios.post("http://localhost:3001/closeOrder",{id:id}).then((data) =>{
                alert(data.data)
                history.push("/admin", { from: "admin/OrderPageInfo" })
            })

    }

    return (
        <div className="Admin">
            <ReduxAddProduct onSubmit={onSubmitAdd}/>
            <ReduxRemProduct onSubmit={onSubmitRem}/>
           <Button secondary> <Link onClick={GiveOrders} to="/admin/adminListDoing">Zamowienia w trakcie realizacji</Link></Button>
            <Button secondary><Link onClick={GiveOrders} to="/admin/adminListDone">Wykonane Zamowienia</Link></Button>
            <Route path='/admin/adminListDoing'>
                {orderTable (orders,getProductsFromOrder) }
            </Route>

            <Route path='/admin/adminListDone'>
                {orderTable (ordersDone,getProductsFromOrder) }
            </Route>
            <Route path='/admin/OrderPageInfo'>
                {order !== null ? userTable(order) : ""}
                <table className="ui red table">
                    <thead>
                    <tr>
                        <th>Nazwa produktu</th>
                        <th>Ilość</th>
                        <th>Opis</th>
                        <th>Cena Produktu</th>
                        <th>Cena</th>
                    </tr>
                    </thead>
                    <tbody>
                {order !== null ? order.map((order,i) =>
                    <tr key={i}>
                        <td>{order.name}</td>
                        <td>{order.quanitty}</td>
                        <td>{order.description}</td>
                        <td>{order.price.toFixed(2)} zł</td>
                        <td>{(order.price * order.quanitty).toFixed(2)} zł</td>
                    </tr>
                ) : ""}
                {order !== null && order[0].status ==="wykonanie" ? <button className="checkout-btn2" onClick={() => closeOrder(order[0].id)} >Zaznacz jako wykonane</button> : ""}
                    </tbody>
                </table>
            </Route>
        </div>
    )
        
}

export default Admin;
