import React, { useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { firestore } from './firebase';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, defs, linearGradient } from 'recharts';
import './graph.css';

export default function Graph() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define your Firestore collection query here
  // const query = firestore.collection('noise'); // Replace with your collection name

  // Use the useCollectionData hook to fetch Firestore data
  // const [queryData] = useCollectionData(query, { idField: 'data' });
  const queryData = null    

  useEffect(() => {
    if (queryData) {
      setData(queryData);
      setLoading(false);
    }
  }, [queryData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <AreaChart
        width={480}
        height={350}
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis dataKey="height" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />

        <Area type="monotone" dataKey="height" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  );
}
