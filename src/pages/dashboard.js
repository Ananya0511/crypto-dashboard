import axios from "axios";
import React, { useEffect, useState } from 'react'

function DashboardPage() {

    const [coins, setCoins]= useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        //Call the API and get the data
        axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ).then((response) => {
            console.log("RESPONSE>>>", response);
            if (response.status == 200) {
              setCoins(response.data);
            //   setPaginatedCoins(response.data.slice(0, 10));
            //   setLoading(false);
            }
          })
    }

  return (
    <div>
        {coins.map((item) => (
            <p>{item.name}</p>
        ))}
    </div>
  )
}

export default DashboardPage;