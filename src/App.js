import React, {useEffect, useState} from 'react';
import Character from './components/Character';
import styled from 'styled-components'
import axios from 'axios';
import './App.css';

const StyledApp = styled.div`
h1{
  font-size: 3rem;
}

`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters,setCharacters] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() =>{
    //Getting Characters Information
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
    <StyledApp className="App">

      <h1 className="Header">Star Wars Characters</h1>
      {/* Making the list of all characters */}
      {characters.map((character,index) =>{
        return  <Character key={index} info={character}/>
      })};
       
    </StyledApp>
  );
}

export default App;
