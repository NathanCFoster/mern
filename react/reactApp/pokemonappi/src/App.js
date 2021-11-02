import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [allPoke, setPoke] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=200")
      .then(e =>{
        setPoke(e.data.results);
      })
      .catch(e => console.log(e));
  })
  

  const display = (
    allPoke.length === 0 ? <p className="display-2">Loading</p>
    :
    <table className="table-secondary table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {allPoke.map((item, i) => {
          return(
            <tr key={i}>
              <th>{item.name}</th>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
  
  return (
    <div className="App">
      {display}
    </div>
  );
}

export default App;
