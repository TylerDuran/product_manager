import React, { useState } from 'react'
import axios from 'axios'


const Form = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const {products, setProducts} = props;

    const createProduct = (e) => {
        e.preventDefault()

        const newProduct = {
            title,
            price,
            description
        }
        console.log(newProduct);

        // POST to the DB with the obj
        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                console.log(res.data);
                console.log("CLIENT SUCCESS!!!!");
                setProducts([...products, newProduct])
            })
            .catch(err => {
                // TODO: when errors come from Server!
                console.log("Client ERROR");
                console.log(err);
            })
    }

    return (
        <div>
            {/* <p>
                {JSON.stringify(title)} <br />
                {JSON.stringify(price)} <br />
                {JSON.stringify(description)}<br />
            </p> */}
            <form onSubmit={createProduct}>
                Title: <input onChange={(e) => setTitle(e.target.value)} value={title} /> <br />

                Price: <input onChange={(e) => setPrice(e.target.value)} value={price} /> <br />

                Description: <input onChange={(e) => setDescription(e.target.value)} value={description} /> <br />

                <button>Create</button>
            </form>
        </div>
    )
}

export default Form