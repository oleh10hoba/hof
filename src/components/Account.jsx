import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';


const Account = data => {
    let address = "Nadbystrzycka 42/406";
    let visible = 1;
    const changeAddress = () =>{
        // visible = (visible === 0) ? 1: 0;
        console.log(visible);
        console.log(("1111111111"));
        
        // console.log(document.getElementById("address");
        // document.getElementById("address")= 'visible';
        // console.log(document.getElementById("address").style);
        // document.getElementsByClassName("address").style.visibility = "visible";
    }
    const { id, first_name, last_name, email, mobile, delivery_address } = data
    return(
    <div className='Account'>
        <h2>Adres dostawy: {address}</h2>
        <button onClick={changeAddress()}>Zmień</button>
        <input style={{visibility:  (visible === 0) ? "hidden" : "visible"}} placeholder="Wprowadz nowy adres" id="address"/>
        {/* <form action="">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"/>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/>
            <input type="submit" value="Submit"></input>
        </form> */}
        <h2>{data.first_name}</h2>
        <h2>{data.last_name}</h2>
        <h2>{data.email}</h2>
        <h2>{data.mobile}</h2>
        <h2>{data.delivery_address}</h2>
    </div>
    );
};

export default Account;
