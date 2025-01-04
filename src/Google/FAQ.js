import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Google Chrome?",
      answer: "Google Chrome is a fast, secure, and free web browser, built for the modern web. Chrome syncs bookmarks across all your devices, fills out forms automatically, and so much more."
    },
    {
      question: "How do I update Google Chrome?",
      answer: "Chrome updates automatically when a new version is available. To manually check for updates, click the three dots menu → Help → About Google Chrome."
    },
    {
      question: "Is Chrome free to download?",
      answer: "Yes, Google Chrome is completely free to download and use. Chrome is available for Windows, Mac, Linux, Android, and iOS devices."
    },
    {
      question: "How do I make Chrome my default browser?",
      answer: "After installing Chrome, open it and click the three dots menu → Settings. Look for 'Default browser' and click 'Make default'. The exact steps might vary depending on your operating system."
    },
    {
      question: "Can I use Chrome offline?",
      answer: "Yes, you can use many Chrome features offline. You can also enable offline viewing for Gmail, Google Drive, and other Google services."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" style={{
      padding: '80px 24px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#4285F4',
          marginBottom: '40px',
          textAlign: 'center'
        }}>Frequently asked questions</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              style={{
                border: '1px solid #dadce0',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: activeIndex === index ? '0 1px 3px rgba(60,64,67,0.3)' : 'none'
              }}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                style={{
                  width: '100%',
                  padding: '24px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  color: '#4285F4',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {item.question}
                <span style={{
                  fontSize: '1.5rem',
                  color: '#4285F4',
                  fontWeight: '300'
                }}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div style={{
                maxHeight: activeIndex === index ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-out'
              }}>
                <div style={{
                  padding: '0 24px 24px',
                  color: '#4285F4',
                  lineHeight: '1.6'
                }}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
