import React from "react";

export const About = () => {
  const centeredStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border:'2px solid blue',
   margin:'20px',
   color: 'blue'
  };
  return <div style={centeredStyle}> <h1>About</h1> </div> ;
};
