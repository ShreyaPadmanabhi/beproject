import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';
import MapComponent from './MapComponent';

const Map = () => {
    return (
        <div className="map">
            <MapComponent /> 

            {/* Map Placeholder */}
        </div>
    );
};

export default Map;