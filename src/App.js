
import React , {useEffect, useState} from 'react';
import './App.css';

import Addtask from './components/Addtask';
import Card from './components/Card.js';
import Update from './components/Update';



function App() {

  const [lists,setLists] = useState([])
  const [click, setClick] = useState(0)
  const [update, setUpdate] = useState(0)
  const [iid , setIid] = useState('')
  

  return (
    <div className="App">


  <Addtask  lists={lists} setLists={setLists} setClick={setClick} click={click}/>
    
      <Card  click={click} setClick={setClick} setUpdate={setUpdate} setIid={setIid}  />
      
      <Update update={update} setUpdate={setUpdate} iid={iid}/>
    {
      console.log(iid)
    }

  

   
  
   
      
    </div>
  );
}

export default App;
