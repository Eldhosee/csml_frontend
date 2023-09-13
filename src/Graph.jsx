
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip ,Area,CartesianGrid,AreaChart} from "recharts";
import './graph.css';
const url =
  "https://mocki.io/v1/91c00047-12fa-4998-a394-df8909d3603c";

export default function Graph() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData);
  }, []);
  return (
    <div className="container">
       <AreaChart width={480} height={350} data={data}
  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
    </linearGradient>
    {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient> */}
  </defs>
  <XAxis dataKey="date" />
  <YAxis dataKey="height"/>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  
  <Area type="monotone" dataKey="height" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
 
</AreaChart>
    </div>
    
   
  );
}
