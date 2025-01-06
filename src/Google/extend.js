


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image11 from "../assets/extend_image.png";
import icon1 from "../assets/extend_icon1.png";
import icon2 from "../assets/extend_icon2.png";
import icon3 from "../assets/extend_icon3.png";
import icon4 from "../assets/extend_icon4.png";
import search from "../assets/search-removebg-preview.png";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Extend() {
  const containerRef = useRef(null);
  const searchRef = useRef(null);
  const searchTextRef = useRef(null);

  // Using useRef for iconRefs to ensure consistency across renders
  const iconRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
    });

    // Animating icons
    tl.fromTo(
      iconRefs.current[0].current,
      { x: "-200px", opacity: 0 },
      { x: "0", opacity: 1, duration: 1 }
    )
      .fromTo(
        iconRefs.current[1].current,
        { y: "-200px", opacity: 0 },
        { y: "0", opacity: 1, duration: 1 },
        "<"
      )
      .fromTo(
        iconRefs.current[2].current,
        { x: "200px", opacity: 0 },
        { x: "0", opacity: 1, duration: 1 },
        "<"
      )
      .fromTo(
        iconRefs.current[3].current,
        { y: "200px", opacity: 0 },
        { y: "0", opacity: 1, duration: 1 },
        "<"
      );

    // Scrambled text animation on scroll for the text inside search1 div
    gsap.fromTo(
      searchTextRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        scrambleText: {
          text: "Stay safe while you browse", // Scramble effect text
          chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // Characters to scramble
          revealDelay: 0.5,
          speed: 0.2,
        },
        scrollTrigger: {
          trigger: searchRef.current,
          start: "top center", // Trigger when element reaches the center of the viewport
          end: "bottom center",
          scrub: true, // Scroll-linked animation
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Styles for the container and elements
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    padding: "20px",
  };

  const sideStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "50%",
    padding: "20px",
    marginLeft: "100px",
  };

  const rightSideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    position: "relative",
    marginRight: "50px",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    zIndex: 1,
  };

  const iconStyle = {
    position: "absolute",
    width: "60px",
    height: "60px",
    opacity: 0,
  };

  const h1Style = {
    fontWeight: "bold", // Bold
    fontSize: "3rem", // Increased size
    margin: "0",
    padding: "5px 0",
  };

  const pStyle = {
    fontSize: "1.2rem", // Increased size for p tag
    margin: "5px 0",
  };

  const search1Style = {
    backgroundColor: "#f1f5ff",
    display: "inline-block",
    padding: "5px",
    borderRadius: "12px",
    fontSize: "2em",
    textAlign: "center",
  };

  return (
    <>
      <div style={containerStyle} ref={containerRef}>
        <div style={sideStyle}>
          <h1 style={h1Style}>Extend</h1>
          <h1 style={h1Style}>your</h1>
          <h1 style={h1Style}>Experience</h1>
          <p style={pStyle}>From Shopping and</p>
          <p style={pStyle}>entertainment to productivity,</p>
          <p style={pStyle}>find extensions to improve your</p>
          <p style={pStyle}>experience in the Chrome Web</p>
          <p style={pStyle}>Store.</p>
        </div>
        <div style={rightSideStyle}>
          <img src={image11} alt="Extend experience" style={imgStyle} />
          <img
            src={icon1}
            alt="Icon 1"
            style={{ ...iconStyle, top: "10%", left: "10%" }}
            ref={iconRefs.current[0]}
          />
          <img
            src={icon2}
            alt="Icon 2"
            style={{ ...iconStyle, top: "30%", right: "10%" }}
            ref={iconRefs.current[1]}
          />
          <img
            src={icon3}
            alt="Icon 3"
            style={{ ...iconStyle, bottom: "30%", left: "10%" }}
            ref={iconRefs.current[2]}
          />
          <img
            src={icon4}
            alt="Icon 4"
            style={{ ...iconStyle, bottom: "10%", right: "10%" }}
            ref={iconRefs.current[3]}
          />
        </div>
      </div>

      <div className="search" ref={searchRef}>
        <center>
          <div style={search1Style} ref={searchTextRef}>
            <span style={{ marginRight: "10px" }}>Stay</span>
            <img src={search} width="30px" alt="search icon" />
            <span style={{ marginLeft: "10px" }}>safe</span>
          </div>
          <h1>while you browse</h1>
        </center>
      </div>
    </>
  );
}

export default Extend;
