import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

const Flashcard = ({ id, name, photoUrl }) => {
    return (
        <div className="flashcard">
            <img src={photoUrl} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Flashcard;