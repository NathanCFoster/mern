import logo from './logo.svg';
import './App.css';
import AddBox from './components/box';
import LeBoxes from './components/leboxes';
import React, {useState} from 'react';

function App() {
  const [colors, setColors] = useState([{color: "blue", height: 100}]);
  const NewColor = ( color , height) => {
    const newCo = { color: color, height: height}
    const updateColors = [...colors, newCo];
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
