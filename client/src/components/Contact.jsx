import React from 'react';
import axios from "axios";

const checkLogin = () => {
    axios.get('http://localhost:3001/isAuth', {
        headers:{
            "access-token": localStorage.getItem("jwtToken")
        }
    }).then((response)=> {
        console.log(response)
    })

}


const Account = product => {

    return(
        <>
        <div className='Contact'>
            <h2>Kontakt</h2>
            Telefon: 882 059 519
        </div>
    </>
    );
};

export default Account;
