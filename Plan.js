import React, {useCallback, useState, Component} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FlashcardList from './FlashcardList';
import Map from './Map';
import Select from "react-dropdown-select";
import './App.css';


const Plan = () => {
    const[place, setPlace] = React.useState([]);

        const flashcards = [
          
            { id: 1, name: 'Nashik', photoUrl: '' },
            { id: 2, name: 'Pune', photoUrl: ''},
            { id: 3, name: 'Mumbai', photoUrl: '' },
            
        ];
        const options = [
          {
            id: 1,
            name: 'Leanne Graham'
          },
          {
            id: 2,
            name: 'Ervin Howell'
          }
        ];
    
        return (
          <div className='main'>
            <div className="app">
                <FlashcardList flashcards={flashcards} />
            </div>
            <div className='days'>
        <h3>DAY 1</h3>
        <Select
          options={options}
          labelField="name"
          valueField="id"
          onChange={(values) => this.setValues(values)}
        />
        <h3>DAY 2</h3>
        <Select
          options={options}
          labelField="name"
          valueField="id"
          onChange={(values) => this.setValues(values)}
        />
        <h3>DAY 3</h3>
        <Select
          options={options}
          labelField="name"
          valueField="id"
          onChange={(values) => this.setValues(values)}
        />
      </div>
            <div className="alignmap">
            <Map />
            </div>
          </div>
        );
        
    
}
export default Plan;