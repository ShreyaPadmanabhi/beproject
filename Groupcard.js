import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

const Groupcard = ({ id, name, photoUrl }) => {
    return (
        <div className="groupcard">
            <img src={photoUrl} alt={name} />
            <p>{name}</p>
            <button>CONNECT</button>
        </div>
    );
};

export default Groupcard;