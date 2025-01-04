import React from 'react';

function Cards() {
  const total = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    overFlow: 'hidden',
    minHeight: '100vh',  // This ensures vertical centering
    margin: '0 auto',    // This helps with horizontal centering
    maxWidth: '1300px',   // This constrains the width similar to Chrome's website
   marginLeft:"100px",
   marginRight:"100px",
   marginTop:"50px"
    
  };
  const left = {
    display: 'flex',
    width: '600px',
    height: '590px',
    flexDirection: 'column',
    margin: '10px',
    padding: '20px 60px',
    backgroundColor: '#f1f5ff',
   
    position: 'relative',
    borderRadius: '3%',
  };
  const right = {
    display: 'flex',
    width: '600px',
    height: '590px',
    flexDirection: 'column',
    margin: '10px',
    padding: '20px 60px',
    backgroundColor: '#fff9e6',
    
    position: 'relative',
    borderRadius: '3%',
  };
  const image11 = {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
  };
  const image12 = {
    position: 'absolute',
    bottom: '30px',
    right: '40px',
    // backgroundColor: 'lightYellow',
    animation: 'moveRight 5s',
  };
const keyframes = `
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-400px);
  }
  100% {
    transform: translateX(0);
  }
}
`;

  return (
    <div>
      
    <style>
    {keyframes}
    </style>

    <div className="total" style={total}>
      <div className="left" style={left}>
        <p>UPDATES</p>
        <h1>Automatic updates</h1>
        <p>
          there's new Chrome release every four weeks, making it easy to have
          the newest features and a faster, safer web browser.
        </p>
        <p style={{ color: 'blue' }}>Learn about automatic updates</p>
        <div style={image11}>
          <img
            src={'/images/9.png'}
            width={'95%'}
            style={{ borderRadius: '3%' }}
          ></img>
        </div>
      </div>
      <div className="right" style={right}>
        <p>LATEST</p>
        <h1>New from Chrome</h1>
        <p>
          Chrome regularly updates with tools and features that make it faster
          and easier to use.
        </p>
        <a href="#">Learn what's new on Chrome</a>

         <div style={image12}>
          <img src="/images/chrome_png-removebg-preview.png"></img>
        </div> 

      </div>
    </div>
   
    </div>
  );
}

export default Cards;