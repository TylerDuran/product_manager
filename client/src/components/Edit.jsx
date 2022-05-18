import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const Edit = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const{id} = useParams();

    const {products, setProducts} = props;

    // Get data from the DbB so the form is pre filled
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [id])


    const createProduct = (e) => {
        e.preventDefault()

        const updatedProduct = {
            title,
            price,
            description
        }
        console.log(updatedProduct);

        // POST to the DB with the obj
        axios.put("http://localhost:8000/api/products/" +id, updatedProduct)
            .then(res => {
                console.log(res.data);
                console.log("CLIENT SUCCESS!!!!");
                navigate("/products/" + id);
                setProducts([...products, updatedProduct])
            })
            .catch(err => {
                // TODO: when errors come from Server!
                console.log("Client ERROR");
                console.log(err);
            })
    }

    return (
        <div>
        <p>
        {JSON.stringify(title)} <br />
        {JSON.stringify(price)} <br />
        {JSON.stringify(description)}<br />
        </p> 
            <form onSubmit={createProduct}>
                Title: <input onChange={(e) => setTitle(e.target.value)} value={title} /> <br />

                Price: <input onChange={(e) => setPrice(e.target.value)} value={price} /> <br />

                Description: <input onChange={(e) => setDescription(e.target.value)} value={description} /> <br />

                <button>Create</button>
            </form>
        </div>
    )
}

export default Edit