import logo from './logo.svg';
import './App.css';
import tab from './components/tab';

function App() {
  return (
    <div className="App">
      <ul className="nav nav-tabs">
        <tab content={"heythere"} />
      </ul>
    </div>
  );
}

export default App;
