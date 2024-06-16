import React from 'react';
import './Clients.css';
import scalerlogo from '../assets/logos/Scaler-Logo.svg';

function Clients() {
  const clients = [
    { name: "themeforest", logo:scalerlogo },
  ];

  return (
    <div className="clients">
      <h2>Clients</h2>
      <div className="client-items">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;