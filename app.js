import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() { 
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from backend
    axios.get('/api')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message || 'Loading...'}</h1>
    </div>
  );
}

export default App;
