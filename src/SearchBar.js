import './App.css';
import React from 'react';
import Data from './Data';
import {useState} from 'react';

function SearchBar(){

 
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='search'>
      <input type="text" placeholder="type here"     
       onChange={event =>{
        setSearchTerm(event.target.value);
        }}
        />
        <button type="search" variant="outline-success" >Search</button>
      {Data.filter((val)=> {
        if(searchTerm =="") {
          return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
           return val
        }
      }).map((val, key)=>{
        return(
         <div className='user' key={key}>
          <p>{val.title} </p>
         </div>
        );
      })}
    </div>
  );
}


export default SearchBar;