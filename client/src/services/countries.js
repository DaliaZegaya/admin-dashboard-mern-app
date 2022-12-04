import React from 'react'

const getAllCountries = async () => {
    try {
        return await fetch("http://localhost:8000/api/countries")
        .then(res=>res.json())
    }
    catch (error) {
        console.log(error);
    }
}
export default getAllCountries;