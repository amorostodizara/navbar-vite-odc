import React from "react";

export const Home = () => {
  const centeredStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border:'2px solid black',
   margin:'20px'
  };
  return <div style={centeredStyle}> <h1>Home</h1> </div> ;
};
