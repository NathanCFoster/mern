import './App.css';
import LeTab from './components/tab';
import React, { useState } from 'react';
import Display from './components/display';


function App() {
  const [tab, setTab] = useState(0);
  const submitTab = (index) => {
    console.log(index);
    setTab(index);
    console.log(tab);
    for (let x = 0; x < allTabs.length; x++) {
      allTabs[x].id = false;
    }
    allTabs[index].id = !allTabs[index].id;
  }
  
  const [allTabs, setTabs] = useState([{ "title": "this", "content": "that", "id": true },
  { "title": "fun", "content": "stuff", "id": false },
  { "title": "very", "content": "cool", "id": false },]);
  return (

    <div className="App">
      <div className="container">
        <ul className="nav nav-tabs mt-3">
          {allTabs.map((item, i) => {
            return (
              <LeTab content={{ "title": item.title, "content": item.content }} newTab={submitTab} curTab={tab} thisTab={i} key={i} isTabbed={item.id} />
            );
          }


          )}
        </ul>
        <Display content={allTabs[tab].content} />
      </div>

    </div>
  );
}

export default App;
