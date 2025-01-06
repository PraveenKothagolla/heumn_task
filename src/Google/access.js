// import React from "react";
// import img20 from "../assets/ai_desktop-2x.webp"

// function Access(){

//     return(
//         <>
//         <div className="maindiv">
//           <div className="item1">
//              <div>
//               <p>GOOGLE AI </p>
//               <h1>Access AI</h1>
//               <h1>superpowers while</h1>
//               <h1>you browse.</h1>
//             </div>
          
            
//              <div>
//                 <p>Google is integrating artificial intelligence</p>
//                 <p>to make our products more useful. We</p>
//                 <p>use AI for features like Search, Google</p>
//                 <p>Translate, and more, and we’re</p>
//                 <p>innovating new technologies responsibly.</p>
//             </div>
            
//         </div>
//         <img src={img20}></img>
//         </div>
        
//         </>
//     )
// }

// export default Access


import React from "react";
import img20 from "../assets/ai_desktop-2x.webp";

function Access() {
  // Define styles as JavaScript objects
  const styles = {
    maindiv: {
      width: "80%",
      margin: "0 auto",
      textAlign: "left",
      backgroundColor:"#fff9e6",
      padding:"40px",
      borderRadius:"15px",
      marginTop:"50px"
    },
    item1: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      marginBottom: "20px",
    },
    leftContent: {
      width: "50%",
    },
    rightContent: {
      width: "50%",
    },
    img: {
      width: "100%",
      borderRadius: "10px",
    },
  };

  return (
    <div style={styles.maindiv}>
      <div style={styles.item1}>
        {/* Left Content */}
        <div style={styles.leftContent}>
          <p>GOOGLE AI</p>
          <h1>Access AI</h1>
          <h1>superpowers while</h1>
          <h1>you browse.</h1>
        </div>

        {/* Right Content */}
        <div style={styles.rightContent}>
          <p>Google is integrating artificial intelligence</p>
          <p>to make our products more useful. We</p>
          <p>use AI for features like Search, Google</p>
          <p>Translate, and more, and we’re</p>
          <p>innovating new technologies responsibly.</p>
        </div>
      </div>

      <img src={img20} alt="AI Illustration" style={styles.img} />
    </div>
  );
}

export default Access;

