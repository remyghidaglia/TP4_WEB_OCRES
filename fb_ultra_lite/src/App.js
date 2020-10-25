import img1 from './img/bob.jpg';
import img2 from './img/martine.jpg';
import img3 from './img/camille.jpg';
import './App.css';
import { useState } from 'react';

var PROFILS = [
  {
    firstname: "Bob",
    name: "Dylan",
    dateOfBirth:"17/02/1970",
    image :img1, 
    publication : {content :"Hey, j'adore la guitare !", liked:false}
  },
  {
    firstname: "Martine",
    name: "Aubry",
    dateOfBirth:"13/03/1983",
    image :img2, 
    publication : {content :"Hey, j'adore le PS !", liked:false}
  },
  {
    firstname: "Camille",
    name: "Mares",
    dateOfBirth:"28/06/1992",
    image :img3, 
    publication : {content :"Hey, j'adore les cocktails", liked:false}
  }
];

const App = () => {
  // States
  const [currentProfile, setCurrentProfile] = useState(PROFILS[0])
  const [colored, setColored] = useState("white");

  // Utils
  const handleLikedClick = (firstname) => {
    const profileIdx = PROFILS.findIndex(p => p.firstname == firstname) 
    PROFILS[profileIdx].publication.liked = !PROFILS[profileIdx].publication.liked
    const updated_prof = {...PROFILS[profileIdx]}
    setCurrentProfile(updated_prof)
  }
  const handleProfileClick = firstname => {
    const profileClicked = PROFILS.find(p => p.firstname == firstname)
    setCurrentProfile(profileClicked)
  }
  const handleBackgroundChange = () => {
    setColored(colored == "steelblue" ? "white" : "steelblue")
  }
  const buttons = PROFILS.map(p => <Button content={p.firstname} callback={handleProfileClick}></Button>)

  return (
    <div className="App">
      <h1>Facebook Lite</h1>
      <div className="profiles">{ buttons }</div>
      <br/>
      <div className="container">
      <div className="thumbnail" style={{backgroundColor:colored}}>
        <img src={currentProfile.image} ></img>
        <p>{currentProfile.firstname}</p>
        <p>{currentProfile.name}</p>
        <p>{currentProfile.dateOfBirth}</p>
        <Button callback={handleBackgroundChange} content="Changer de style"></Button>
      </div>
      </div>
      <div className="content">
      <div className="publicationZone">
      <p>{currentProfile.publication.content}</p>
      <Button firstname={currentProfile.firstname} liked={currentProfile.publication.liked} callback={handleLikedClick} content="J'aime"></Button>
      </div>
      </div>
    </div>
  );
}


const Button = ({content, liked, callback, firstname}) => {
  var renderedText = content
  var handleClick
  if (liked != undefined){
    renderedText = `${liked ? 1 : 0} ` + renderedText
  }
  if (callback) {
    handleClick = () => callback(liked != undefined ? firstname : content)
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
