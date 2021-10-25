

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
                    <td>&nbsp;{history.created_at.slice(0, 19).replace('T', ' ')}</td>
                    <td>&nbsp;{history.status}</td>
                    <button onClick={() => getProductsFromOrder(history.id)}>&nbsp;Pokaż produkty</button>
                </tr>
            )}
            </tbody>
        </table>

        <table className="ui red table">
            <thead>
            <tr>
                <th>Nazwa produktu</th>
                <th>Ilość</th>
            </tr>
            </thead>
            <tbody>

        {products !== null ?
            products.map((product,i) =>
                    <tr key={i}>
                        <td>{product.name}</td>
                        <td>{product.quanitty}</td>
                    </tr>
                )
        :
           ""
        }

            </tbody>
        </table>


    </div>
)
}

else return (
    <>
        </>
)
}

export default History;