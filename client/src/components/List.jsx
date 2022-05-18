import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const List = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [])




    return (
        <div>
            <h1>All Products:</h1>
            {/* {JSON.stringify(products)} */}
            {
                products.map((product, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List