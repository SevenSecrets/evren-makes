import React from 'react';
import placeholder from './placeholder.jpeg';
import ProjectImage from './ProjectImage.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Evren Makes
        </h1>
        <div className="Socials">
          <a href="https://instagram.com/evrenmakes" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/material-sharp/24/000000/instagram-new.png" alt="instagram link" height="30" width="30"/>
          </a>
        </div>
      </header>
      <div className="App-body">
        <div className="Project-images">
          <ProjectImage imageUri={placeholder} altText="placeholder"/>
        </div>
      </div>
      <footer className="footer">
        <a href="https://icons8.com/">Instagram and Twitter icons by Icons8</a>
      </footer>
    </div>
  );
}

export default App;
