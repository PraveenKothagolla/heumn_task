

import React from "react";
import fastway from "../assets/fastway-removebg-preview.png";

function Fastway() {
  return (
    <>
    <center>
      <div style={{marginTop:"50px"}}>
        <span style={{ fontSize: "40px", color: "black" }}>
          The
        </span>
        <span
          className="green"
          style={{
            backgroundColor: "#A8DAB5",  // Lighter green background
            color: "black",  // Keep the text green
            fontSize: "40px",
            padding: "0 5px",
            borderRadius:"25px",
            marginLeft:"10px"
          }}
        >
          <img src={fastway} width="30px" height="30px" alt="Fastway" />
          <span> way to </span>
        </span>
        <h1> do things online</h1>
      </div>
      </center>
    </>
  );
}

export default Fastway;
