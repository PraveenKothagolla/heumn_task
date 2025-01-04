import React from 'react';

function GoogleFooter() {
  return (
    <footer style={{ backgroundColor: '#f2f2f2', padding: '20px 0', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginRight: '950px' }}>
        <span style={{ marginRight: '10px' }}>Follow Us</span>
        <a href="#" style={{ marginRight: '10px' }}><i className='fab fa-youtube' style={{ width: '24px', height: '24px', color: '#000000' }}></i></a>
        <a href="#" style={{ marginRight: '10px' }}><i className='fab fa-twitter' style={{ width: '24px', height: '24px', color: '#000000' }}></i></a>
        <a href="#" style={{ marginRight: '10px' }}><i className='fab fa-facebook-square' style={{ width: '24px', height: '24px', color: '#000000' }}></i></a>
      </div>
      
      <div style={{ display: 'flex', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '40px', padding: '0 20px' }}>
        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Chrome Family</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Chromebooks</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Chromecast</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Other Platforms</a></li>
          </ul>
        </div>
        
        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Enterprise</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Download Chrome Browser</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Chrome Browser for Enterprise</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Google Cloud</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Google Workspace</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Education</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Google Chrome Browser</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Devices</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Web Store</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Dev and Partners</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Chromium</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>ChromeOS</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Chrome Web Store</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Chrome Experiments</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px' }}>
          <h3 style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Stay Connected</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Chrome Help</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Google Chrome Blog</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Update Chrome</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Chrome Tips</a></li>
          </ul>
        </div>
      </div>
      
      <div style={{ backgroundColor: '#e5e5e5', padding: '10px 0', borderTop: '1px solid #ccc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
            <li style={{ marginRight: '10px' }}><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>Google</a></li>
            <li style={{ marginRight: '10px' }}><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>Privacy</a></li>
            <li style={{ marginRight: '10px' }}><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>Terms</a></li>
            <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '12px' }}>Settings</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default GoogleFooter;
