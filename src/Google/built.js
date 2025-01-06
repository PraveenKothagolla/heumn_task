

import React from "react";
import fastway from "../assets/built-removebg-preview.png";

function Built() {
  return (
    <>
    <center>
      <div style={{marginTop:"50px"}}>
        <span style={{ fontSize: "40px", color: "black" }}>
          The browser  
          <span
          className="green"
          style={{
            backgroundColor: "#fff9e6",  // Lighter green background
            color: "orange",  // Keep the text green
            fontSize: "40px",
            padding: "10px",
            borderRadius:"25px",
            marginLeft:"10px"
          }}
        >
          <img src={fastway} width="30px" height="30px" alt="Fastway" />
          <span> built </span>
        </span>
        
        </span>
        <h1> by Google</h1>
      </div>
      </center>
    </>
  );
}

export default Built;
