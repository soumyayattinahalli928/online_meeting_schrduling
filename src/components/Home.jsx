import React from 'react';

import { NavDropdown, Navbar, Nav } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <div style={{ position: 'relative', maxWidth: '100%' }}>
        <div style={{ backgroundImage: 'url(home.jpeg)', backgroundSize: 'cover', height: '650px', position: 'relative', marginTop:'90px' }}>
          <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', color: 'black' }}>
            <h1 style={{ fontSize: '80px', fontStyle: 'italic', color: 'whitesmoke' }}>Online Meeting Scheduling App</h1>
            <h1 style={{ fontSize: '50px', fontStyle: 'italic', color: 'blueviolet', padding: '30px' }}>MeetupHub</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;