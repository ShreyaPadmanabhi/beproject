


// // import React, { useState, useEffect } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import MarkerClusterGroup from "react-leaflet-cluster";

// // const MapComponent = ({ attractions }) => {
// //   const [markers, setMarkers] = useState([]);

// //   useEffect(() => {
// //     const fetchCoordinates = async () => {
// //       try {
// //         const formattedMarkers = [];
// //         for (const attraction of attractions) {
// //           const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${attraction}&key=e30b529f5a0745a48a711e24e81c43fc`);
// //           const data = await response.json();
// //           if (data.results.length > 0) {
// //             const { lat, lng } = data.results[0].geometry;
// //             formattedMarkers.push({ position: [lat, lng], name: attraction });
// //           } else {
// //             console.warn('Location not found:', attraction);
// //           }
// //         }
// //         setMarkers(formattedMarkers);
// //       } catch (error) {
// //         console.error('Error fetching location data:', error);
// //       }
// //     };

// //     fetchCoordinates();
// //   }, [attractions]);

// //   return (
// //     <MapContainer center={[20.5937, 78.9629]} zoom={5}>
// //       <TileLayer
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //       />
// //       <MarkerClusterGroup>
// //         {markers.map((marker, index) => (
// //           <Marker key={index} position={marker.position}>
// //             <Popup>{marker.name}</Popup>
// //           </Marker>
// //         ))}
// //       </MarkerClusterGroup>
// //     </MapContainer>
// //   );
// // };

// // export default MapComponent;


// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import MarkerClusterGroup from "react-leaflet-cluster";
// import './MapComponent.css'; // Import CSS file for styling

// const MapComponent = ({ attractions }) => {
//   const [markers, setMarkers] = useState([]);

//   useEffect(() => {
//     const fetchCoordinates = async () => {
//       try {
//         if (!Array.isArray(attractions)) {
//           console.error('Attractions must be an array.');
//           return;
//         }
    
//         const formattedMarkers = [];
//         for (const attraction of attractions) {
//           const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${attraction}&key=e30b529f5a0745a48a711e24e81c43fc`);
//           const data = await response.json();
//           if (data.results.length > 0) {
//             const { lat, lng } = data.results[0].geometry;
//             formattedMarkers.push({ position: [lat, lng], name: attraction }); // Ensure that each attraction object has position and name properties
//           } else {
//             console.warn('Location not found:', attraction);
//           }
//         }
//         setMarkers(formattedMarkers);
//       } catch (error) {
//         console.error('Error fetching location data:', error);
//       }
//     };

//     fetchCoordinates();
//   }, [attractions]);

//   return (
//     <div className="map-container">
//       <MapContainer className="map" center={[20.5937, 78.9629]} zoom={5}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <MarkerClusterGroup>
//           {markers.map((marker, index) => (
//             <Marker key={index} position={marker.position}>
//               <Popup>{marker.name}</Popup>
//             </Marker>
//           ))}
//         </MarkerClusterGroup>
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";
import './MapComponent.css'; // Import CSS file for styling

const MapComponent = ({ attractions }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        if (!Array.isArray(attractions)) {
          console.error('Attractions must be an array.');
          return;
        }
        
        const formattedMarkers = [];
        for (const attraction of attractions) {
          const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${attraction.name}&key=e30b529f5a0745a48a711e24e81c43fc`);
          const data = await response.json();
          
          console.log('API Response for', attraction.name, ':', data); // Log API response
          
          if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            formattedMarkers.push({ position: [lat, lng], name: attraction.name });
          } else {
            console.warn('Location not found for:', attraction.name);
            // Handle case where location is not found (e.g., set a default position)
            formattedMarkers.push({ position: [0, 0], name: attraction.name }); // Set default position
          }
        }
        setMarkers(formattedMarkers);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchCoordinates();
  }, [attractions]);

  return (
    <div className="map-container">
      <MapContainer className="map" center={[20.5937, 78.9629]} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
