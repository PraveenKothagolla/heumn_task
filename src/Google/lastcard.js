
import React from "react";
import img25 from "../assets/search-front_desktop-2x.webp";
import img26 from "../assets/mail-removebg-preview.png";
import img27 from "../assets/drivw-removebg-preview.png";
import img28 from "../assets/docs.webp";

function LastCard() {
  // Define styles as JavaScript objects
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between", // Space between the two cards
      gap: "20px", // Space between cards
      padding: "20px",
      width: "80%", // Make the container take up 80% of the width
      margin: "0 auto", // Center the container horizontally
    },
    card1:{
        flex: "1", // Allow cards to grow and fill space equally
        backgroundColor: "#d6c7b3", // Light background for cards
        borderRadius: "10px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        padding: "20px", // Add padding inside the cards
        textAlign: "left",
        minHeight: "300px", // Increase the height of the cards
    },
    card: {
      flex: "1", // Allow cards to grow and fill space equally
      backgroundColor: "#f9f9f9", // Light background for cards
      borderRadius: "10px", // Rounded corners
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
      padding: "20px", // Add padding inside the cards
      textAlign: "left",
      minHeight: "300px", // Increase the height of the cards
    },
    imagesContainer: {
      display: "flex",
      justifyContent: "space-around", // Evenly distribute icons
      marginTop: "100px",
    },
    img1: {
        width: "100%",
        transition: "transform 0.3s ease", // Smooth transition for scaling
      },
    img: {
      width: "100px",
      transition: "transform 0.3s ease", // Smooth transition for scaling
    },
    imgHover: {
      "&:hover": {
        transform: "scale(1.2)", // Scale image up by 20% on hover
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Card 1 */}
      <div style={styles.card1}>
        <p>GOOGLE SEARCH</p>
        <h1>The search bar</h1>
        <h1>you love, built</h1>
        <h1>right in.</h1>
        <img src={img25} style={styles.img1} alt="Google Search" />
      </div>

      {/* Card 2 */}
      <div style={styles.card}>
        <p>GOOGLE WORKPLACE</p>
        <h1>Get things done,</h1>
        <h1>with or without</h1>
        <h1>Wi-Fi.</h1>
         
        <div style={styles.imagesContainer} className="imagclass">
          <img src={img26} style={styles.img} alt="Mail" />
          <img src={img28} style={styles.img} alt="Docs" />
          <img src={img27} style={styles.img} alt="Drive" />
        </div>
      </div>
    </div>
  );
}

export default LastCard;
