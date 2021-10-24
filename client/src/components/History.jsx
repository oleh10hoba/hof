

import axios from "axios";
import {useState} from "react";

const History = (props) =>
{


   const [products,setProducts] = useState(null)

    var checker = false

    async function getProductsFromOrder(id){
        console.log(id)
    axios.post("http://localhost:3001/getProductsFromOrder",{id:id}).then((data)=>{
        setProducts(data.data)
    })
        checker = true
    }
    console.log(products)
    
    const {history} = props
if(history !== null) {
return (
    <div className="centered">
        <table className="ui celled padded table" width="35%" border="1">
            <thead>
            <tr >
                <td>&nbsp;Data</td>
                <td>&nbsp;Status</td>
            </tr>
            </thead>
            <tbody>
            {history.map((history,i) =>
                <tr key={i} >
                    <td>&nbsp;{history.created_at}</td>
                    <td>&nbsp;{history.status}</td>
                    <button onClick={() => getProductsFromOrder(history.id)}>&nbsp;Pokaż produkty</button>
                </tr>
            )}
            </tbody>
        </table>

        <p> Produkty zamówione:</p>
        {products !== null ?
            products.map((product,i) =>
               <div key={i}> {product.name} {product.quanitty}</div>
                )
        :
           ""
        }



    </div>
)
}

else return (
    <>
        </>
)
}

export default History;