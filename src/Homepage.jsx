import React from 'react'
import Sidebar from './Sidebar'
import { BrowserRouter as Router } from 'react-router-dom';
import Graph from './Graph';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <Router>
      
       <div style={{display:'flex'}}>
       <Sidebar />
       <Dashboard/>
       </div>
        
        
      
    </Router>
  )
}

export default Home
