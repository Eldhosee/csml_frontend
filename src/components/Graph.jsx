import React, { useEffect, useState } from 'react';
import "./Graph.css";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
Chart.register(CategoryScale);

const AirPage = ({data}) => {


    console.log(data);

    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "Air",
                backgroundColor: ["#FF21CBE2"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                borderColor: ["#FF21CBE2"],
                data: data,
            },
        ],
    };

    return <div >


        <div className="lineChar_container">
            <div className="lineChart">
                <Line data={lineState} />
            </div>
        </div>
    </div>

};

export default AirPage;
