import React from 'react';

const NoisePage = () => {
  const noisePageStyle = {
    backgroundColor: 'black',
    
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
  };

  return <div style={noisePageStyle}>
    <h1  style={{color:'white'}}><center>noise page</center></h1>
  </div>;
};

export default NoisePage;
