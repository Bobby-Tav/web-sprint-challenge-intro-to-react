import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters,setCharacters] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() =>{
    //Getting Characters
    axios
    .get('https://swapi.dev/api/people')
    .then(res =>{
      console.log("Info",res.data)
      setCharacters(res.data)
    })
    .catch(err => console.log("You didn't get the Info you asked for",err))
  }
    ,[]);

  return (
    <div className="App">

      <h1 className="Header">Characters</h1>
      {characters.map((character,index) =>{
        return  <Character key={index} info={character}/>
      })};
       
    </div>
  );
}

export default App;
