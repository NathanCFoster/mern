import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      <p className="display-2">Hello Dojo!</p>
      <p className="display-3">Things I need to do:</p>
      <ul className="d-flex flex-wrap flex-column align-content-start">
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </div>
  );
}

export default App;
