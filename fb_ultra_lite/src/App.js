import logo from './logo.svg';
import './App.css';

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

  const buttons = PROFILS.map(c => <Button content={c.name}></Button>)

  return (
    <div className="App">
      { buttons }
    </div>
  );
}


const Button = ({content}) => <button className="button">{content}</button>

export default App;
