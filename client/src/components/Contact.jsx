import React from 'react';
import axios from "axios";



const Account = product => {

    const testF = () => {
        axios.post('http://localhost:3001/addFavourites', {
            userId: 10,
            productId: 4});
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
