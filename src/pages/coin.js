// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import CoinInfo from "../components/Coin/CoinInfo/info";
// import LineChart from "../components/Coin/LineChart/lineChart";
// import PriceToggle from "../components/Coin/PriceToggle/priceToggle";
// import SelectDays from "../components/Coin/SelectDays/selectDays";
// import Header from "../components/Common/Header/header";
// import Loader from "../components/Common/Loader/loader";
// import List from "../components/Dashboard/List/list";
// import { coinObject } from "../functions/coinObject";
// // import { convertDate } from "../functions/convertDate";
// import { getCoinData } from '../functions/getCoinData';
// import { getCoinPrices } from '../functions/getCoinPrices';
// import { settingChartData } from '../functions/settingChartData';


// function CoinPage() {
//     const { id } = useParams();
//     const [coinData, setCoinData] = useState();
//     const [coin, setCoin] = useState();
//     const [loading, setLoading] = useState(false);
//     const [days, setDays] = useState(120);
//     const [priceType, setPriceType] = useState("prices");
//     const [chartData, setChartData] = useState({
//       labels: [],
//       datasets: [],
//     });
  
//     useEffect(() => {
//       getData();
//     }, [id]);
  
//     const getData = async () => {
//       // setLoading(true);
//       const data = await getCoinData(id);
//       if (data) {
//           coinObject(setCoin, data);   //For Coin Obj being passed in the List
//           const prices = await getCoinPrices(id, days, priceType);
//           if (prices) {
//               settingChartData(setChartData, prices, data);
//               setLoading(false);
//           }
//       }
//     };

//     const handleDaysChange = async (event) => {
//       setDays(event.target.value);
//       const prices = await getCoinPrices(id, event.target.value, priceType);
//       if (prices) {
//         settingChartData(setChartData, prices, coin);
//       }
//     };

//     const handlePriceTypeChange = async (event) => {
//       setPriceType(event.target.value);
//       const prices = await getCoinPrices(id, days, event.target.value);
//       if (prices) {
//         settingChartData(setChartData, prices, coin);
//       }
//     };
  
//     return (
//       <div>
//         {loading || !coin?.id || !chartData ? (
//           <Loader />
//         ) : (
//           <>
//             <Header />
//             <div className="grey-wrapper">
//               <List coin={coin} delay={0.1} />
//             </div>
//             <div className="grey-wrapper">
//               <SelectDays days={days} handleDaysChange={handleDaysChange} />
//               <PriceToggle 
//                   handlePriceTypeChange={handlePriceTypeChange} 
//                   priceType={priceType}/>
//               <LineChart chartData={chartData} priceType={priceType} />
//             </div>
//             <CoinInfo name={coin.name} desc={coin.desc} />
//           </>
//         )}
//       </div>
//     );
//   }

// export default CoinPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/Coin/CoinInfo/info";
import LineChart from "../components/Coin/LineChart/lineChart";
import PriceToggle from "../components/Coin/PriceToggle/priceToggle";
import SelectDays from "../components/Coin/SelectDays/selectDays";
import Footer from "../components/Common/Footer/footer";
import Header from "../components/Common/Header/header";
import Loader from "../components/Common/Loader/loader";
import List from "../components/Dashboard/List/list";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(120);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [id]);

  const getData = async () => {
    setLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoin, data); //For Coin Obj being passed in the List
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        settingChartData(setChartData, prices, data);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices, coin);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      settingChartData(setChartData, prices, coin);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading || !coin?.id || !chartData ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coin} delay={0.1} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceToggle
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo name={coin.name} desc={coin.desc} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default CoinPage;
