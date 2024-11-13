import React from "react";

export const NotFound = () => {
  const centeredStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border:'2px solid red',
   margin:'20px'
  };
  return <div style={centeredStyle}> <h1>404 Not found</h1> </div> ;
};
