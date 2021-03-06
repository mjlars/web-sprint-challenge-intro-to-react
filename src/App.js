import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Header from './components/Header';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      setCharacter(res.data.results)
    })
  },[])

  return (
    <div className="App">
      <Header />
      <Character character = {character}/>
    </div>
  );
}

export default App;
