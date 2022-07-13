import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [apiResponse, setApiResponse] = useState(''); 

  useEffect(() => {
    fetch('https://api.bb.terrantech.com')
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            setApiResponse(result.message);
          },
          (error) => {
            setApiResponse(`Failed to get API response - ${error}`);
          }
        )
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          API Response: { apiResponse }
      </header>
    </div>
  );
};

export default App;
