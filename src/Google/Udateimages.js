
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import image1 from "../assets/1.webp"
import image2 from "../assets/4.webp"
import image3 from "../assets/3.webp"
gsap.registerPlugin(ScrollTrigger);

function Update() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const imageRefs = useRef([]);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate the icon rotation continuously
    gsap.to(iconRef.current, {
      rotation: 360,
      repeat: -1, // Infinite rotation
      duration: 2,
      ease: 'linear',
    });

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: imageRefs.current[0], // Trigger animation on the first image
      start: 'top 75%', // When top of image is 75% visible
      onEnter: () => {
        const timeline = gsap.timeline();
        timeline
          .fromTo(
            imageRefs.current[0], // Left image
            { x: '-100%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
          )
          .fromTo(
            imageRefs.current[1], // Center image
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
          )
          .fromTo(
            imageRefs.current[2], // Right image
            { x: '200%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 1, ease: 'power3.out' }
          );
      },
    });

    ScrollTrigger.create({
      trigger: textRef.current, // Trigger text animation
      start: 'top 10%',
      onEnter: () => {
        gsap.from(textRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      },
    });
  }, []);

  const handleMouseOver = (index) => setHoverIndex(index);
  const handleMouseOut = () => setHoverIndex(null);

  const imageStyles = (index) => ({
    width: '350px',
    height: '500px',
    margin: '0 15px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    transform: hoverIndex === index ? 'scale(1.1) rotate(5deg)' : 'none',
    opacity: hoverIndex === index ? 0.8 : 1,
    boxShadow: hoverIndex === index ? '0 8px 16px rgba(0, 0, 0, 0.3)' : 'none',
    borderRadius: hoverIndex === index ? '10px' : '0',
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src={image1}
          alt='Image 1'
          style={imageStyles(0)}
          onMouseOver={() => handleMouseOver(0)}
          onMouseOut={handleMouseOut}
        />
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src={image2}
          alt='Image 2'
          style={imageStyles(1)}
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={handleMouseOut}
        />
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src={image3}
          alt='Image 3'
          style={imageStyles(2)}
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={handleMouseOut}
        />
      </div>
      <br />
      <br />
      <div>
        <center>
          <h1>Discover the latest</h1>
        </center>
        <center>
          <h1>
            <span
              //  ref={textRef}
              style={{
                borderRadius: '15%',
                backgroundColor: '#f1f5ff',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px',
              }}
            >
              <FontAwesomeIcon
                ref={iconRef}
                icon={faRotateRight}
                style={{ marginRight: '10px', color: 'black' }}
              />
              updates
            </span>{' '}
            from chrome
          </h1>
        </center>
      </div>
    </>
  );
}

export default Update;
