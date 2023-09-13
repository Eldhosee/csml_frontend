import React, { useEffect, useState } from 'react';
import "./air1.css"
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
import Graph from './components/Graph';
Chart.register(CategoryScale);

const AirPage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://io.adafruit.com/api/v2/CSML/feeds?x-aio-key=aio_GcaG30uxH9N1Ij3CbUxmPzGCwzLb')
      .then(response => response.json()) // Assuming the API returns JSON data
      .then(data => {
        // Assuming 'data' is an array of numeric values (e.g., [1, 2, 3, 4, 5])
        setData(data)
      })

    console.log(data)
  }, [])

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "test",
        backgroundColor: ["#FF21CBE2"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        borderColor: ["#FF21CBE2"],
        data: [0, 100],
      },
    ],
  };

  return <div >

    {/* <Sidebar /> */}

    <div className='airPageStyle'>
      <h1><center>Air page</center></h1>

      {data.map((d) => (
        <>
          {d.name !== "parameters" && <Graph label={d.key} value={d.last_value}/>}
        </>
      ))}
    </div>


  </div>;
};

export default AirPage;
