import axios from "axios";
import {useState} from "react";

const History = (props) =>
{
   const [products,setProducts] = useState(null)



    async function getProductsFromOrder(id){
    axios.post("http://localhost:3001/getProductsFromOrder",{id:id}).then((data)=>{
        setProducts(data.data)
    })

    }
    
    const {history} = props
    if(!history) {
        return (
            <>
                <p>Nie ma historii</p>
            </>
        )
    }

    else return (
    <div className="centered">
        <table className="ui celled padded table" width="35%" border="1">
            <thead>
            <tr>
                <td>&nbsp;Data</td>
                <td>&nbsp;Status</td>
                <td>&nbsp;</td>
            </tr>
            </thead>
            <tbody>
            {history.map((history,i) =>
                <tr key={i}>
                    <td>&nbsp;{history.created_at.slice(0, 19).replace('T', ' ')}</td>
                    <td>&nbsp;{history.status}</td>
                    <td> <button onClick={() => getProductsFromOrder(history.id)}>&nbsp;Pokaż produkty</button></td>
                </tr>
            )}
            </tbody>
        </table>

        <table className="ui red table">
            <thead>
            <tr>
                <th>Nazwa produktu</th>
                <th>Ilość</th>
                <th>Opis</th>
                <th>Cena Produktu</th>
                <th>Cena</th>
            </tr>
            </thead>
            <tbody>

            {products !== null ?
                products.map((product,i) =>
                    <tr key={i}>
                        <td>{product.name}</td>
                        <td>{product.quanitty}</td>
                        <td>{product.description}</td>
                        <td>{product.price.toFixed(2)} zł</td>
                        <td>{(product.price * product.quanitty).toFixed(2)} zł</td>
                    </tr>
                )
                :
                ""
            }

            </tbody>
        </table>
        <div className="ui steps">
            <div className="step">
                {products !== null ? <p>Total: {products[0].total.toFixed(2)} zł</p> : ""}
            </div>
        </div>


    </div>
    )
}

export default History;