import React from 'react';
import axios from "axios";



const Account = product => {

    const testF = () => {
        axios.post('http://localhost:3001/refreshCart', {
            userId: 10}).then(response => {

        });
    }


    return(
        <>
        <div className='Contact'>
            <h2>Kontakt:</h2>
            <button onClick={testF}>Click</button>
        </div>
    </>
    );
};

export default Account;
