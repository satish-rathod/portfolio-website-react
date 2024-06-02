import React from 'react';
import './Clients.css';

function Clients() {
  const clients = [
    { name: "themeforest", logo: "/logos/themeforest.png" },
    { name: "dribbble", logo: "/logos/dribbble.png" },
    { name: "behance", logo: "/logos/behance.png" },
    { name: "github", logo: "/logos/github.png" },
    { name: "flickR", logo: "/logos/flickr.png" },
    { name: "smungMung", logo: "/logos/smungmung.png" },
    { name: "squareSpace", logo: "/logos/squarespace.png" },
    { name: "bitBucket", logo: "/logos/bitbucket.png" }
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