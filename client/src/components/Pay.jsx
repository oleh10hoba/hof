import React, {useEffect} from 'react'

const Pay = ({ totalPrice, method }) =>
{
    return(
        <>
        {console.log("Method: ", method)}
            <div className="card">
                    <form class="checkout">
                    <div className="Pay">
                        <div class="checkout-header">
                        <h1 class="checkout-title">
                            Suma: &nbsp; <b>{totalPrice}</b> zł.
                            { <span class="checkout-price">{totalPrice}</span> }
                        </h1>
                        </div>
                        <p>
                            <input type="text" class="checkout-input checkout-name" placeholder="Twoje imie" autofocus/>
                            <input type="text" class="checkout-input checkout-exp" placeholder="MM"/>
                            <input type="text" class="checkout-input checkout-exp" placeholder="YY"/>
                        </p>
                        <p>
                            <input type="text" class="checkout-input checkout-card" placeholder="4111 1111 1111 1111"/>
                            <input type="text" class="checkout-input checkout-cvc" placeholder="CVC"/>
                        </p>
                        <p>
                            <input type="submit" value="Zapłać" class="checkout-btn"/>
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
                    <button type="submit" formtarget="_blank" >Zapłać {totalPrice} zł z BLIK(PayU)</button>
                </form >
            </div>
        </>
    )
}

export default Pay;