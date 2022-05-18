import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const List = (props) => {

    const { products, setProducts } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [setProducts])

    // delete 
    const deleteProduct = (deleteId) => {
        // console.log(deleteId);
        // make a request to the DB to delete
        axios.delete("http://localhost:8000/api/products/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("DELET WAS ASUCCESS!");
                // remove from the DOM after a successful delete
                setProducts(products.filter((product) => product._id !== deleteId));
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>All Products:</h1>
            {/* {JSON.stringify(products)} */}
            {
                products.map((product, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                            <br></br>
                            <button>
                                <Link to={"/update/" + product._id}>Edit</Link>
                            </button>
                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List