import React from 'react'

const getAllProducts = async () => {
    try {
        return await fetch("http://localhost:8000/api/products")
        .then(res=>res.json())
    }
    catch (error) {
        console.log(error);
    }
}
export default getAllProducts;