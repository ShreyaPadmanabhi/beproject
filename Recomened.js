import React, { useState, useEffect } from "react";
import axios from "axios"; // Example using Axios

function Recomended() {
  const [destination, setDestination] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`/recommend/${destination}`);
      setRecommendations(response.data.attractions);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your destination"
        value={destination}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Get Recommendations</button>
      {recommendations.length > 0 && (
        <ul>
          {recommendations.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recomended;
