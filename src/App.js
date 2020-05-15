import React from 'react';
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
            <img src="https://img.icons8.com/material-sharp/24/000000/instagram-new.png"/>
          </a>
          <a href="https://twitter.com/BhEvren" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/android/24/000000/twitter.png"/>
          </a>
        </div>
      </header>
      <body className="App-body">
        <p>
          App Body goes here
        </p>
        <img src="" alt="placeholder"/>
        <div className="Project-images">
        </div>
      </body>
      <footer className="footer">
        <a href="https://icons8.com/">Instagram and Twitter icons by Icons8</a>
      </footer>
    </div>
  );
}

export default App;
