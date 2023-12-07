import React, { useEffect, useState } from 'react'
import List from './List';
import Search from './Search';

function Country() {

    const [ctry, setCtry] = useState([]);

    async function getCountry() {
        const API_URL = "https://restcountries.com/v3.1/all";
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setCtry(data);
        } catch (error) {
            console.error("error in fetching", error);
        }


    }

    useEffect(() => {
        getCountry();

    }, [])

    console.log("countries", ctry);


    return (
        <div>
            <Search/>
            <List  toList={ctry}/>
        </div>
    )
}

export default Country;