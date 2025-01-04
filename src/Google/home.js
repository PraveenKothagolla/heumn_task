import React from "react";
import RoundedNavBar from "../Google/Roundednavbar";
import gsap from "gsap";
import { useRef,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Home() {

  const textRef = useRef();

  useEffect(() => {
    const lines = textRef.current.querySelectorAll("h1");
    gsap.fromTo(
      lines,
      { opacity: 0, y: 50 }, // Starting state: invisible and slightly below
      {
        opacity: 1,
        y: 0, // Ending state: fully visible at the original position
        duration: 1, // Animation duration (in seconds)
        stagger: 0.3, // Delay between each line's animation
        ease: "power2.out", // Easing for smoother animation
      }
    );
  }, []);
  return (
    <div>     
      <div style={{ marginTop: "50px" }}>
        <center style={{ marginBottom: "10px" }}>
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/chrome.png"
            alt="Google Chrome Logo"
          />
        </center>

        <div style={{ textAlign: "center" }} ref={textRef}>
          <h1 style={{ fontWeight: "bold", fontSize: "3.5rem" }}>The browser</h1>
          <h1 style={{ fontWeight: "bold", fontSize: "3.5rem" }}>
            built to be yours
          </h1>
        </div>
        <center><button style={{backgroundColor:"#4285F4",marginTop:"50px",color:"white",border:"white",padding:"20px",borderRadius:"15px"}}>
    <FontAwesomeIcon icon={faDownload} /> Download Chrome
  </button>
   </center>
   <br></br>
    <br></br>
   <center><h2><a style={{textDecoration:"none",color:"#4285F4"}} href="https://www.google.com/intl/en_in/chrome/update/">I want to update chrome</a></h2></center>

  <center><p>For Windows 11/10 64-bit</p></center>
  <center><input style={{width:"20px",height:"20px"}} type="checkbox"></input>&nbsp;<span>Help make Google Chrome better by automatically sending usage statistics and crash reports to Google.</span></center>
   <br></br>
   <center>By downloading Chrome, you agree to the <span style={{ color: '#4285F4' }}> Google Terms of Service</span> and</center>  
      <center><a  style={{textDecoration:"none"}}href="https://www.google.com/intl/en_in/chrome/terms/">Chrome and ChromeOS Additional Terms of Service</a></center>
      </div>
    </div>
  );
}

export default Home;
