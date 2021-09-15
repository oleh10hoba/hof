import React from 'react'

const Pay = (props) =>
{
    const {testvalue} = props;
    return(
        <div >
            {console.log("Props:",props)}
             <form class="checkout">
             <div className="Pay">
                <div class="checkout-header">
                <h1 class="checkout-title">
                    Checkout
                    <span class="checkout-price">{testvalue}</span>
                </h1>
                </div>
                <p>
                    <input type="text" class="checkout-input checkout-name" placeholder="Your name" autofocus/>
                    <input type="text" class="checkout-input checkout-exp" placeholder="MM"/>
                    <input type="text" class="checkout-input checkout-exp" placeholder="YY"/>
                </p>
                <p>
                    <input type="text" class="checkout-input checkout-card" placeholder="4111 1111 1111 1111"/>
                    <input type="text" class="checkout-input checkout-cvc" placeholder="CVC"/>
                </p>
                <p>
                    <input type="submit" value="Purchase" class="checkout-btn"/>
                </p>
            </div>
            </form>
        </div>
    )
}

export default Pay;