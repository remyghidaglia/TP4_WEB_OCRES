import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const PROFILS = [
  {
    name: "Bob"
  },
  {
    name: "Martine"
  },
  {
    name: "Camille"
  }
];
const App = () => {

  const buttons = PROFILS.map(p => <Button content={p.name}></Button>)

  return (
    <div className="App">
      { buttons }
      <Button clickable content="J'aime"></Button>
    </div>
  );
}


const Button = ({content, clickable}) => {
  const [clicked, setClicked] = useState(false);  
  var renderedText = content
  if (clickable){
    renderedText = `${clicked ? 1 : 0} ` + renderedText
  }
  return (
    <button 
      className="button" 
      onClick={clickable && (() => setClicked(!clicked))}
    >
      {renderedText} 
    </button>
    )
}

export default App;
