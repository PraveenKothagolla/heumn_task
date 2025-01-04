// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// function Fast() {
//   return (
//     <div id='fast'>
//        <div id="first">
//              <center>
//                 <h1>Make It</h1>
//               </center>
//               <center>
//                 <h1>
//                   <span

//                     style={{
//                       borderRadius:"15%",
//                       // backgroundColor: 'lightblue',
//                       // backgroundColor:"#f1f5ff",
//                       display: 'inline-flex',
//                       alignItems: 'center',
//                       padding:"10px"
//                     }}
//                   >
//                   <img src="/images/paint-removebg-preview.png" style={{width:"30px",height:"30px"}}></img>
//                   <h1>yours</h1>
//                  </span>{' '}
//               and
//                 </h1>
//                 <h1>take it with you </h1>
//               </center>

//               <div id="second">
//                  <img src="/images/1.webp"></img>
//               </div>
//               <div id="third">
//                 <img src="/images/5.webp"></img>
//               </div>
              
         
//          </div>   
//          </div>
//   );
// }

// export default Fast;


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

gsap.registerPlugin(ScrollTrigger);

function Fast() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger for the first div: fades out and second div replaces it
    gsap.fromTo(
      firstRef.current,
      { opacity: 1, position: 'relative', zIndex: 3 },
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: firstRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          onEnter: () => {
            gsap.to(firstRef.current, { opacity: 0, duration: 1 });
            gsap.to(secondRef.current, { opacity: 1, duration: 1 });
          },
        },
      }
    );

    // ScrollTrigger for the second div: fades out and third div replaces it
    gsap.fromTo(
      secondRef.current,
      { opacity: 0, position: 'relative', zIndex: 2 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: secondRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          onEnter: () => {
            gsap.to(secondRef.current, { opacity: 0, duration: 1 });
            gsap.to(thirdRef.current, { opacity: 1, duration: 1 });
          },
        },
      }
    );

    // ScrollTrigger for the third div: stays visible
    gsap.fromTo(
      thirdRef.current,
      { opacity: 0, zIndex: 1 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: thirdRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div id="fast" style={{ position: 'relative', height: '100vh', overflow: 'hidden',marginTop:"60px" }}>
      {/* First Div */}
      <div
        id="first"
        ref={firstRef}
        style={{
          position: 'absolute',
          top: '0',
          width: '100%',
          height: '100vh', // Ensure it takes full height of the viewport
          transition: 'opacity 1s ease',
        }}
      >
        <center>
          <h1>Make It</h1>
        </center>
        <center>
          <h1>
            <span
              style={{
                borderRadius: '15%',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <img
                src="/images/paint-removebg-preview.png"
                style={{ width: '30px', height: '30px' }}
                alt="paint icon"
              />
              <h1>yours</h1>
            </span>
            and
          </h1>
          <h1>take it with you</h1>
        </center>
      </div>

      {/* Second Div */}
      <div
        id="second"
        ref={secondRef}
        style={{
          position: 'absolute',
          top: '0',
          opacity: 0,
          width: '100%',
          height: '100vh',
          transition: 'opacity 1s ease',
        }}
      >
        <img src="/images/1.webp" alt="First Image" style={{ width: '100%' }} />
      </div>

      {/* Third Div */}
      <div
        id="third"
        ref={thirdRef}
        style={{
          position: 'absolute',
          top: '0',
          opacity: 0,
          width: '100%',
          height: '100vh',
          transition: 'opacity 1s ease',
        }}
      >
   <center>     <img src="/images/5.webp" alt="Second Image" style={{ width: '70%' }} /></center>
      </div>
    </div>
  );
}

export default Fast;

