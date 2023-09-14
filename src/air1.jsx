import React, { useEffect, useState } from 'react';
import "./air1.css"
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
import Graph from './components/Graph';
Chart.register(CategoryScale);

const AirPage = () => {

  const [data, setData] = useState([])
  const [graphData, setGraphData] = useState({
    x: "0",
    y: "0",
    label: 'Label 1'
  })

  useEffect(() => {
    fetch('https://io.adafruit.com/api/v2/CSML/feeds?x-aio-key=aio_excY74jMUZvPXOPE9mo2VHrKA72s')
      .then(response => response.json()) // Assuming the API returns JSON data
      .then(apiData => {

        // setData(prevData => [
        //   ...prevData.map((d, index) => {
        //     return {
        //       x: index === 0 ? "0" : (prevData[index - 1]?.y || "0"),
        //       y: apiData[index]?.last_value || "0"
        //     };
        //   }),

        apiData.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));


        setData(prevData => [
          ...prevData.map((d, index) => {
            return {
              x: apiData[index]?.updated_at,
              y: apiData[index]?.last_value,
              label: 'Label 1'
            };
          }),
          ...apiData.slice(prevData.length).map(d => ({
            x: (prevData[prevData.length - 1]?.y || "0"),
            y: d.last_value
          }))
        ]);
        

      })

    
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

      <Graph data={data}/>
    </div>


  </div>;
};

export default AirPage;
