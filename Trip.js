


// // import React, { useState } from 'react';
// // import MapComponent from './MapComponent'; // Import the MapComponent

// // const Trip = () => {
// //   const [searchItem, setSearchItem] = useState('');
// //   const [recommendations, setRecommendations] = useState([]);
// //   const [selectedAttraction, setSelectedAttraction] = useState(null);

// //   const handleSearch = (e) => {
// //     setSearchItem(e.target.value);
// //   };

// //   const recommendAttractions = () => {
// //     fetch(`http://localhost:8000/recommend/${searchItem}`)
// //       .then(response => response.json())
// //       .then(data => {
// //         if (Array.isArray(data.attractions)) {
// //           setRecommendations(data.attractions);
// //         } else {
// //           setRecommendations([]);
// //         }
// //       })
// //       .catch(error => console.error('Error:', error));
// //   };

// //   const handleShowMap = (attraction) => {
// //     setSelectedAttraction(attraction);
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Search location..."
// //         value={searchItem}
// //         onChange={handleSearch}
// //       />
// //       <button onClick={recommendAttractions}>Get Recommendations</button>
// //       <div>
// //         <h2>Top attractions:</h2>
// //         <ul>
// //           {recommendations.map((attraction, index) => (
// //             <li key={index}>
// //               {attraction.name}
// //               <button onClick={() => handleShowMap(attraction)}>
// //                 Show on Map
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       {selectedAttraction && (
// //         <div>
// //           <h3>Map for: {selectedAttraction.name}</h3>
// //           <MapComponent attraction={selectedAttraction} />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Trip;
 

// import React, { useState } from 'react';
// import MapComponent from './MapComponent'; // Import the MapComponent

// const Trip = () => {
//   const [searchItem, setSearchItem] = useState('');
//   const [recommendations, setRecommendations] = useState([]);
//   const [selectedAttraction, setSelectedAttraction] = useState(null);

//   const handleSearch = (e) => {
//     setSearchItem(e.target.value);
//   };

//   const recommendAttractions = () => {
//     fetch(`http://localhost:8000/recommend/${searchItem}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (Array.isArray(data.attractions)) {
//           setRecommendations(data.attractions);
//         } else {
//           setRecommendations([]);
//         }
//       })
//       .catch(error => console.error('Error:', error));
//   };

//   const handleShowMap = (attraction) => {
//     setSelectedAttraction(attraction);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search location..."
//         value={searchItem}
//         onChange={handleSearch}
//       />
//       <button onClick={recommendAttractions}>Get Recommendations</button>
//       <div>
//         <h2>Top attractions:</h2>
//         <ul>
//           {recommendations.map((attraction, index) => (
//             <li key={index}>
//               {attraction.name}
//               <button onClick={() => handleShowMap(attraction)}>
//                 Show on Map
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {selectedAttraction && (
//         <div>
//           <h3>Map for: {selectedAttraction.name}</h3>
//           <MapComponent attraction={[selectedAttraction]} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Trip;

// Trip.js
import React, { useState } from 'react';
import MapComponent from './MapComponent'; // Import the MapComponent

const Trip = () => {
  const [searchItem, setSearchItem] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const recommendAttractions = () => {
    fetch(`http://localhost:8000/recommend/${searchItem}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.attractions)) {
          setRecommendations(data.attractions);
        } else {
          setRecommendations([]);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleShowMap = (attraction) => {
    setSelectedAttraction(attraction);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search location..."
        value={searchItem}
        onChange={handleSearch}
      />
      <button onClick={recommendAttractions}>Get Recommendations</button>
      <div>
        <h2>Top attractions:</h2>
        <ul>
          {recommendations.map((attraction, index) => (
            <li key={index}>
              {attraction.name}
              <button onClick={() => handleShowMap(attraction)}>
                Show on Map
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedAttraction && (
        <div>
          <h3>Map for: {selectedAttraction.name}</h3>
          <MapComponent attractions={[selectedAttraction]} />
        </div>
      )}
    </div>
  );
};

export default Trip;
