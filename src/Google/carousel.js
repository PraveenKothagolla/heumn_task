import React, { useState } from "react";
import sampleVideo from "../assets/video.mp4"; // Replace with your video file path
import sampleImage from "../assets/car_image.webp"; // Replace with your image file path

function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      type: "video",
      src: sampleVideo,
    },
    {
      type: "image",
      src: sampleImage,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div style={{ position: "relative" }}>
        {slides[currentIndex].type === "video" ? (
          <video
            src={slides[currentIndex].src}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />
        ) : (
            <div>
                <h1>stay on top</h1>
                <h1>of tabs</h1>
           <img
            src={slides[currentIndex].src}
            alt="Slide"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}

          />
          </div>
        )}
      </div>

      {/* Custom Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "15px",
        }}
      >
        <button
          onClick={handleNext} // Reversed direction: right arrow moves to the next
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          &#x276E; {/* Left Arrow */}
        </button>
        <button
          onClick={handlePrev} // Reversed direction: left arrow moves to the previous
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          &#x276F; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
}

export default MediaCarousel;
