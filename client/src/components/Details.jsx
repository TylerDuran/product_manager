import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Details = (props) => {


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


    return (
        <>
        {
            thisProduct ? (
                <div >
                    <h3>{thisProduct.title}</h3>
                    <p>Price: ${thisProduct.price}</p>
                    <p>Description{thisProduct.description}</p>
                </div >
            ) : "loading..."
        }
    </>
    )
}

export default Details