import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { app, database } from './firebaseConfig';
import { collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Itinerary = () => {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate("/")
    };
    // const auth = getAuth();
    // const user = auth.currentUser;
    // const ID = user.uid;
    
    const [data, setData] = useState({});
    const mycollection = collection(database, 'itineraries');

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput });
    }
    

    return (
        <div className='Itinerary'>

        {/* <input name="id" type='hidden' value={ID} /> */}
        <div className='Destination'>
            <input name="destination" type="search" placeholder='Enter destination' onChange={(event) => handleInput(event)} />
        </div>


        <div className='trip'>
            <p>PLAN A NEW TRIP</p>
        </div>


        <div className='wrap'>
            <div className='From'>
                <input name="from" type="date" placeholder='From' onChange={(event) => handleInput(event)} />
            </div>
            <div className='To'>
                <input name="to" type="date" placeholder='To' onChange={(event) => handleInput(event)} />
            </div>
        </div>

        <div className='plan'>
            <Link to="/Trip"><button onClick={event => {
           
            HandleClick();
        }}>Plan Itinerary</button></Link>
        </div>
        <div className='group-tourism'>
            <Link to="/GroupTourism"><button>Group Tourism</button></Link>
        </div>
    </div>
    
)
}
export default Itinerary;

