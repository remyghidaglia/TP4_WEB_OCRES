import img1 from './img/bob.jpg';
import img2 from './img/martine.jpg';
import img3 from './img/camille.jpg';
import './App.css';
import { useState } from 'react';

const PROFILS = [
  {
    firstname: "Bob",
    name: "Dylan",
    dateOfBirth:"17/02/1970",
    image :img1, 
    publication : "Hey, j'adore la guitare !"
  },
  {
    firstname: "Martine",
    name: "Aubry",
    dateOfBirth:"13/03/1983",
    image :img2, 
    publication :"Hey, j'adore le PS !"

  },
  {
    firstname: "Camille",
    name: "Mares",
    dateOfBirth:"28/06/1992",
    image :img3, 
    publication : "Hey, j'adore les coktails !"
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
      <h1>Facebook Lite</h1>
      <div className="profiles">{ buttons }</div>
      <br/>
      <div className="container">
      <div className="thumbnail">
        <img src={currentProfile.image} ></img>
        <p>{currentProfile.firstname}</p>
        <p>{currentProfile.name}</p>
        <p>{currentProfile.dateOfBirth}</p>
        <Button style content="changer de style"></Button>
      </div>
      </div>
      <div className="content">
      <div class="publicationZone">
      <p>{currentProfile.publication}</p>
      <Button clickable content="J'aime"></Button>
      </div>
      </div>
    </div>
  );
}


const Button = ({content, clickable, callback,}) => {
  const [clicked, setClicked] = useState(false);  
  var renderedText = content
  var handleClick;
  if (clickable){
    renderedText = `${clicked ? 1 : 0} ` + renderedText
    handleClick = () => setClicked(!clicked)
  } 

  else if (callback) {
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
