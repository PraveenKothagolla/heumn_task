// import React from "react";
// import img1 from "../assets/box1-1.webp"
// import img2 from "../assets/box1-2.webp"
// import img3 from "../assets/box1-3.webp"
// import img from "../assets/box4.webp"

// function Password(){

//     const googleButtonStyle = {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "white",//"#4285F4",  // Google Blue
//         color: "black",
//         border: "none",
//         borderRadius: "4px",
//         padding: "10px 20px",
//         fontSize: "16px",
//         fontWeight: "500",
//         cursor: "pointer",
//         width: "100%", // Make it responsive
//         maxWidth: "220px", // Max width for the button
//         margin: "10px 0",
//       };
//     return(
//         <>
//         <div>
//             <div className="box1" style={{backgroundColor:"#4285F4"}}>

//             <h2>PASSWORD MANAGER</h2>
//             <h1>Use strong</h1>
//             <h1>passwords on</h1>
//             <h1>every site.</h1>
//             <button style={googleButtonStyle}>elisa buckkett</button>
//             <button style={googleButtonStyle}>***********</button>
//             <img src={img1}></img>
            
      

//           </div>
//           <div className="box2" style={{backgroundColor:"#f1f5ff"}}>
//             <p>SAFETY CHECK</p>
//             <h1>Check your</h1>
//             <h1>safety level   </h1>
//             <h1>in real time</h1>
//             <h1>with just</h1>
//             <h1>one click.</h1>

//           </div>
//           <div className="box3">
//             <p>ENHANCED SAFE BROWSING</p>
//             <h1>Browse with</h1>
//             <h1>the</h1>
//             <h1>confidence</h1>
//             <h1>that you're</h1>
//             <h1>staying</h1>
//             <h1>safer online.</h1>

//           </div>
//           <div className="box4">
//             <img src={img} width="200px"></img>
//             <p>Chrome makes it easy to understand exactly what you’re sharing online and who you’re sharing it with. 
//                 Simply use the Privacy Guide, a step-by-step tour of your privacy settings.</p>

//           </div>
          
          

//         </div>
//      </>
//     )
// }

// export default Password
import React from "react";
import img1 from "../assets/box1-1.webp";
import img2 from "../assets/box1-2.webp";
import img3 from "../assets/box1-3.webp";
import img from "../assets/box4.webp";

function Password() {
  const googleButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white", // "#4285F4",  // Google Blue
    color: "black",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    width: "100%", // Make it responsive
    maxWidth: "220px", // Max width for the button
    margin: "10px 0",
  };

  return (
    <>
    <center>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
          gap: "20px", // Space between the items
          justifyItems: "center", // Center items horizontally
          alignItems: "center", // Center items vertically
          padding: "2px", 
          marginTop:"50px",
          width:"80%"// Add padding around the grid
        }}
      >
        {/* Box 1 */}
        <div
          className="box1"
          style={{
            backgroundColor: "#4285F4",
            padding: "20px",
            boxSizing: "border-box",
            height: "600px", // Fixed height for all boxes
            width: "400px", // Fixed width for all boxes
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Center content inside the box
            textAlign: "center",
             borderRadius:"8%"
          }}
        >
          <h2>PASSWORD MANAGER</h2>
          <h1>Use strong</h1>
          <h1>passwords on</h1>
          <h1>every site.</h1>
          <button style={googleButtonStyle}>elisa buckkett</button>
          <button style={googleButtonStyle}>***********</button>
          <img src={img1} width="200px" alt="Password Manager" />
        </div>

        {/* Box 2 */}
        <div
          className="box2"
          style={{
            backgroundColor: "#f1f5ff",
            padding: "20px",
            boxSizing: "border-box",
            height: "600px", // Fixed height for all boxes
            width: "400px", // Fixed width for all boxes
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Center content inside the box
            textAlign: "center",
             borderRadius:"8%"
          }}
        >
          <p>SAFETY CHECK</p>
          <h1>Check your</h1>
          <h1>safety level</h1>
          <h1>in real time</h1>
          <h1>with just</h1>
          <h1>one click.</h1>
        </div>

        {/* Box 3 */}
        <div
          className="box3"
          style={{
            border:"1px solid black",
            padding: "20px",
            boxSizing: "border-box",
            height: "600px", // Fixed height for all boxes
            width: "400px", // Fixed width for all boxes
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Center content inside the box
            textAlign: "center",
             borderRadius:"8%"
          }}
        >
          <p>ENHANCED SAFE BROWSING</p>
          <h1>Browse with</h1>
          <h1>the</h1>
          <h1>confidence</h1>
          <h1>that you're</h1>
          <h1>staying</h1>
          <h1>safer online.</h1>
        </div>

        {/* Box 4 */}
        <div
          className="box4"
          style={{
            backgroundColor:"#3877BF",
            padding: "20px",
            boxSizing: "border-box",
            height: "600px", // Fixed height for all boxes
            width: "400px", // Fixed width for all boxes
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Center content inside the box
            textAlign: "center",
            borderRadius:"8%"
          }}
        >
          <img src={img} style={{marginBottom:"130px"}}width="300px" height="200px"alt="Chrome Privacy" />
          <p style={{color:"white",fontSize:"1.5em"}}>
            Chrome makes it easy to understand exactly what you’re sharing
            online and who you’re sharing it with. Simply use the Privacy Guide,
            a step-by-step tour of your privacy settings.
          </p>
        </div>
      </div>
      </center>
    </>
  );
}

export default Password;

