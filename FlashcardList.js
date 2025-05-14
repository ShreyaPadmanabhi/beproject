// import React, { useCallback, useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import Flashcard from './Flashcard';
// import './App.css';

// const FlashcardList = ({ flashcards }) => {
//     return (
//         <div className="flashcard-list">
//             {flashcards.map(flashcard => (
//                 <Flashcard key={flashcard.id} {...flashcard} />
//             ))}
//         </div>
//     );
// };

// export default FlashcardList;

import React from 'react';
import Flashcard from './Flashcard';
import './App.css';

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} {...flashcard} />
      ))}
    </div>
  );
};

export default FlashcardList;
