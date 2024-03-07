import React from 'react'; // Import react for front end
import './App.css'; // Import in style settings

import logo from './logo.svg'; // Import placeholder logo until we can make our own

// Main website function
function EMarketTrove() { 
  React.useEffect(() => { // allow react gui elemeents 
    document.title = "E-Market Trove"; }, []); // set title for tab

  // Return output to display
  return (
    <div className="App">    
      <h1>E-Market Trove</h1> {/* set title for website*/}
      <header className="App-header">   
        <img src={logo} className="App-logo" alt="logo" /> {/* set our logo */} 
        <p> 
          Just testing things -Victor {/* space reversed for text */}
          This is just placeholder code until we design a better foundation.
        </p>
      </header>
    </div>
  );
}

export default EMarketTrove; // alows other files read App.js function