// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../component/Style.css';

// const ClaimedItems = () => {
//   const [lostItems, setLostItems] = useState([]);
//   const [foundItems, setFoundItems] = useState([]);
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const lostRes = await axios.get('http://localhost:4001/lostItems');
//         const foundRes = await axios.get('http://localhost:4002/foundItems');

//         setLostItems(lostRes.data);
//         setFoundItems(foundRes.data);

//         const matchedPairs = [];

//         lostRes.data.forEach((lost) => {
//           foundRes.data.forEach((found) => {
//             if (
//               lost.itemName.toLowerCase() === found.itemName.toLowerCase() &&
//               lost.location === found.location &&
//               lost.date === found.date &&
//               lost.description.toLowerCase() === found.description.toLowerCase()
//             ) {
//               matchedPairs.push({ lost, found });
//             }
//           });
//         });

//         setMatches(matchedPairs);
//       } catch (error) {
//         console.error('Error fetching items:', error);
//       }
//     };

//     fetchItems();
//   }, []);

//   return (
//     <div className="claimed-container">
//       <h2>Perfect Matches (Claimed Items)</h2>
//       {matches.length === 0 ? (
//         <p>No exact matches found yet.</p>
//       ) : (
//         matches.map((pair, index) => (
//           <div key={index} className="claimed-card">
//             <h3>Lost Item:</h3>
//             <p><strong>Name:</strong> {pair.lost.itemName}</p>
//             <p><strong>Location:</strong> {pair.lost.location}</p>
//             <p><strong>Date:</strong> {pair.lost.date}</p>
//             <p><strong>Description:</strong> {pair.lost.description}</p>
//             <p><strong>Contact:</strong> {pair.lost.contact}</p>

//             <h3>Matched Found Item:</h3>
//             <p><strong>Name:</strong> {pair.found.itemName}</p>
//             <p><strong>Location:</strong> {pair.found.location}</p>
//             <p><strong>Date:</strong> {pair.found.date}</p>
//             <p><strong>Description:</strong> {pair.found.description}</p>
//             <p><strong>Contact:</strong> {pair.found.contact}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ClaimedItems;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../component/Style.css";

const ClaimedItems = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const lostRes = await axios.get("http://localhost:4000/lostItems");
        const foundRes = await axios.get("http://localhost:4000/foundItems");

        const matchedPairs = [];

        lostRes.data.forEach((lost) => {
          foundRes.data.forEach((found) => {
            const sameName =
              lost.title?.toLowerCase() === found.itemName?.toLowerCase();

            const sameDescription =
              lost.description?.toLowerCase() ===
              found.description?.toLowerCase();

            const sameLocation = lost.location
              ?.toLowerCase()
              .includes(found.location?.toLowerCase());

            // allow ±2 days difference
            const lostDate = new Date(lost.dateLost);
            const foundDate = new Date(found.date);
            const diffDays = Math.abs(
              (lostDate - foundDate) / (1000 * 60 * 60 * 24)
            );
            const closeDate = diffDays <= 2;

            if (sameName && sameDescription && sameLocation && closeDate) {
              matchedPairs.push({ lost, found });
            }
          });
        });

        setMatches(matchedPairs);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="claimed-container">
      <h2>Perfect Matches (Claimed Items)</h2>
      {matches.length === 0 ? (
        <p>No exact matches found yet.</p>
      ) : (
        matches.map((pair, index) => (
          <div key={index} className="claimed-card">
            <h3>Lost Item</h3>
            <p><strong>Name:</strong> {pair.lost.title}</p>
            <p><strong>Location:</strong> {pair.lost.location}</p>
            <p><strong>Date:</strong> {new Date(pair.lost.dateLost).toDateString()}</p>
            <p><strong>Description:</strong> {pair.lost.description}</p>
            <p><strong>Contact:</strong> {pair.lost.contactInfo?.phone || "N/A"}</p>

            <h3>Matched Found Item</h3>
            <p><strong>Name:</strong> {pair.found.itemName}</p>
            <p><strong>Location:</strong> {pair.found.city}, {pair.found.state}, {pair.found.country} - {pair.found.location}</p>
            <p><strong>Date:</strong> {new Date(pair.found.date).toDateString()}</p>
            <p><strong>Description:</strong> {pair.found.description}</p>
            <p><strong>Contact:</strong> {pair.found.contact}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ClaimedItems;


