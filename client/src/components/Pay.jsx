import React, {useEffect} from 'react'
import axios from 'axios'
import Account from "./Account";
import {useLocation, link, Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";


const Pay = ({ totalPrice,account }) =>
{
    const location = useLocation()
    const {shop,rec} = location.params
    const history = useHistory();


    const payOrder = (e) => {
        var selfpickup = 1
        if(rec.selected === 'delivery'){
            selfpickup = 0
        }
        e.preventDefault()
        console.log(totalPrice)
        axios.post("http://localhost:3001/addOrder",{
        userId: localStorage.getItem("id"),
        total: totalPrice,
            address : account.delivery_address,
            mobile: account.mobile,
            shopId: shop.selected,
            selfpickup: selfpickup
        })
        history.push("/shop", { from: "pay" })
        window.location.reload();
    }

    return(
        <>
            <div className="card">
                    <form className="checkout">
                    <div className="Pay">
                        <div className="checkout-header">
                        <h1 className="checkout-title">
                            Suma: &nbsp; <b>{totalPrice}</b> zł.
                            { <span className="checkout-price">{totalPrice}</span> }
                        </h1>
                        </div>
                        <p>
                            <input type="text" className="checkout-input checkout-name" placeholder="Twoje imie" autoFocus/>
                            <input type="text" className="checkout-input checkout-exp" placeholder="MM"/>
                            <input type="text" className="checkout-input checkout-exp" placeholder="YY"/>
                        </p>
                        <p>
                            <input type="text" className="checkout-input checkout-card" placeholder="4111 1111 1111 1111"/>
                            <input type="text" className="checkout-input checkout-cvc" placeholder="CVC"/>
                        </p>
                        <p>
                            <input type="submit" onClick={payOrder} value="Zapłać" className="checkout-btn"/>
                        </p>
                    </div>
                </form>
            </div>
            <div>
                <form method="post" action="https://secure.payu.com/api/v2_1/orders">
                    <input type="hidden" name="continueUrl" value="http://shop.url/continue"/>
                    <input type="hidden" name="currencyCode" value="PLN"/>
                    <input type="hidden" name="customerIp" value="123.123.123.123"/>
                    <input type="hidden" name="description" value="Order description"/>
                    <input type="hidden" name="merchantPosId" value="145227"/>
                    <input type="hidden" name="notifyUrl" value="http://shop.url/notify"/>
                    <input type="hidden" name="products[0].name" value="Product 1"/>
                    <input type="hidden" name="products[0].quantity" value="1"/>
                    <input type="hidden" name="products[0].unitPrice" value="1000"/>
                    <input type="hidden" name="totalAmount" value="1000"/>
                    <input type="hidden" name="OpenPayu-Signature" value="sender=145227;algorithm=SHA-256;signature=bc94a8026d6032b5e216be112a5fb7544e66e23e68d44b4283ff495bdb3983a8"/>
                    <button type="submit" formTarget="_blank" >Zapłać {totalPrice} zł z BLIK(PayU)</button>
                </form >
            </div>

        </>
    )
}

export default Pay;