import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import axios from 'axios';

const Account = product => {
    // axios.get('http://localhost:3001/getaccount').then(({ data }) => {
    //   setAccount(data);
    // });
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
    </div>
    );
};

export default Account;
