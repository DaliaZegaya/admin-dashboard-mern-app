import React from 'react'

const getAllOrders = async () => {
    try {
        return await fetch("http://localhost:8000/api/orders")
        .then(res=>res.json())
    }
    catch (error) {
        console.log(error);
    }
}
export default getAllOrders;