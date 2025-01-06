
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// const RoundedNavBar = () => {
//   return (
//     <div>
//   <Navbar expand="lg" style={{ backgroundColor: 'white', borderRadius: '25px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px 20px', width:"600px", marginLeft:"450px", marginTop:"20px"
//    }}>
//       <Container>
//         <Nav className="mx-auto">
//           <Nav.Link href="#updates" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>Updates</Nav.Link>
//           <Nav.Link href="#yours" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>Yours</Nav.Link>
//           <Nav.Link href="#safe" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>Safe</Nav.Link>
//           <Nav.Link href="#fast" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>Fast</Nav.Link>
//           <Nav.Link href="#by-google" style={{ color: '#555', fontWeight: '500', margin: '0 15px' }}>By Google</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   <center style={{marginTop:"30px"}}><h5>Need the Chrome installer? <a href='#'><span style={{color:"blue"}}>Download here</span></a> </h5></center> 
//     </div>
//   );
// }

// export default RoundedNavBar;


// import React, { useEffect, useRef } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
import { useRef,useEffect } from 'react';
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
 

const RoundedNavBar = () => {
  const navbarRef = useRef();

  useEffect(() => {
    const navbar = navbarRef.current;

    // Initially hide the navbar
    gsap.set(navbar, { y: -100, opacity: 0 });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Animate navbar to slide in
        gsap.to(navbar, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // Animate navbar to slide out
        gsap.to(navbar, {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        ref={navbarRef}
        expand="lg"
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "10px 20px",
          width: "650px",
          position: "fixed",
          top: "20px", // This is the final position when visible
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <Container>
          <Nav className="mx-auto">
            <Nav.Link
              href="#updates"
              style={{ color: "#555", fontWeight: "500", margin: "0 15px" }}
            >
              Updates
            </Nav.Link>
            <Nav.Link
              href="#yours"
              style={{ color: "#555", fontWeight: "500", margin: "0 15px" }}
            >
              Yours
            </Nav.Link>
            <Nav.Link
              href="#safe"
              style={{ color: "#555", fontWeight: "500", margin: "0 15px" }}
            >
              Safe
            </Nav.Link>
            <Nav.Link
              href="#fast"
              style={{ color: "#555", fontWeight: "500", margin: "0 15px" }}
            >
              Fast
            </Nav.Link>
            <Nav.Link
              href="#by-google"
              style={{ color: "#555", fontWeight: "500", margin: "0 15px" }}
            >
              By Google
            </Nav.Link>
            <Nav.Link
              href="#by-google"
              style={{ color: "#555", fontWeight: "500", margin: "0 15px" }}
            >
              <button style={{backgroundColor:"#4285F4",color:"white",borderRadius:"25px",border:"white",padding:"5px",width:"100px",height:"60px"}}><FontAwesomeIcon icon={faDownload} /><p>download</p></button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default RoundedNavBar;
