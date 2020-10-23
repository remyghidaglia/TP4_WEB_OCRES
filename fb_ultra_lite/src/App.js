import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const PROFILS = [
  {
    firstname: "Bob",
    name: "Dylan",
    dateOfBirth:"17/02/1970",
    img :"./img/bob.jpg",
  },
  {
    firstname: "Martine",
    name: "Aubry",
    dateOfBirth:"13/03/1983",
    img :"./img/martine.jpg",

  },
  {
    firstname: "Camille",
    name: "Mares",
    dateOfBirth:"28/06/1992",
    img :"./img/camille.jpg",
  }
];

const App = () => {
  // States
  const [currentProfile, setCurrentProfile] = useState(PROFILS[0])

  // Utils
  const handleProfileClick = firstname => {
    const profileClicked = PROFILS.filter(p => p.firstname == firstname)[0]
    setCurrentProfile(profileClicked)
  }

  const buttons = PROFILS.map(p => <Button content={p.firstname} callback={handleProfileClick}></Button>)

  return (
    <div className="App">
      { buttons }
      <Button clickable content="J'aime"></Button>
      <br />
      {JSON.stringify(currentProfile)}
    </div>
  );
}


const Button = ({content, clickable, callback}) => {
  const [clicked, setClicked] = useState(false);  
  var renderedText = content
  var handleClick;
  if (clickable){
    renderedText = `${clicked ? 1 : 0} ` + renderedText
    handleClick = () => setClicked(!clicked)
  } else if (callback) {
    handleClick = () => callback(content)
  }

  return (
    <button 
      className="button" 
      onClick={handleClick}
    >
      {renderedText} 
    </button>
    )
}


export default App;
