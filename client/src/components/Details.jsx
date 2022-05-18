import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Details = (props) => {

    const navigate = useNavigate();

    const { products, setProducts } = props;

    // grab the variable from the url :id :var :whatever
    const { id } = useParams();
    console.log(id);

    const [thisProduct, setThisProduct] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                // always look at what the server is coming back as BEFORE you set the state var
                console.log(res.data);
                setThisProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    const deleteProduct = (deleteId) => {
        // console.log(deleteId);
        // make a request to the DB to delete
        axios.delete("http://localhost:8000/api/products/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("DELET WAS ASUCCESS!");
                navigate("/");
                // remove from the DOM after a successful delete
                setProducts(products.filter((product) => id !== deleteId));
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                thisProduct ? (
                    <div >
                        <h3>{thisProduct.title}</h3>
                        <p>Price: ${thisProduct.price}</p>
                        <p>Description: {thisProduct.description}</p>
                        <button onClick={() => deleteProduct(id)}>Delete</button>
                    </div >
                ) : "loading..."
            }
        </>
    )
}

export default Details