import React from 'react';
import '../App.css';

function Clients() {
  const clients = [
    "themeforest", "dribbble", "behance", "github", 
    "flickR", "smungMung", "squareSpace", "bitBucket"
  ];

  return (
    <div className="clients">
      <h2>Clients</h2>
      <div className="client-items">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <p>{client}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
