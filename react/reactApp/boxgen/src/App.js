import logo from './logo.svg';
import './App.css';
import AddBox from './components/box';
import LeBoxes from './components/leboxes';
import React, {useState} from 'react';

function App() {
  const [colors, setColors] = useState(["blue"]);
  const NewColor = ( color ) => {
    const updateColors = [...colors, color];
    setColors(updateColors);
  }
  
  return (
    <div className="App">
      <AddBox submitColor={NewColor}/>
      <LeBoxes allColors={colors}/>
    </div>
  );
}

export default App;
