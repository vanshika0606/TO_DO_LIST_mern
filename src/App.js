
import React , {useEffect, useState} from 'react';
import './App.css';

import Addtask from './components/Addtask';
import Card from './components/Card.js';
import Update from './components/Update';



function App() {

  const [lists,setLists] = useState([])
  const [click, setClick] = useState(0)
  const [update, setUpdate] = useState(0)
  

  return (
    <div className="App">


  <Addtask  lists={lists} setLists={setLists} setClick={setClick} click={click}/>

      <Update update={update} setUpdate={setUpdate}/>

   <Card  click={click} setClick={setClick} setUpdate={setUpdate} />

  

   
  
   
      
    </div>
  );
}

export default App;
