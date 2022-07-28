
import { useState } from 'react';
import './App.css';

import Addtask from './components/Addtask';
import ListAll from './components/ListAll.js';
import Update from './components/Update.js';


function App() {

  
  
  const [active, setActive] = useState('');

  const [click, setClick] = useState(0)
  const [tap, setTap] = useState(0)
  const [all, setAll] = useState([])
  const [add, setAdd]= useState('')
  const [change, setChange] = useState('');
  const [edit, setEdit] = useState(0)

  const clicked = () =>{
    if(click===1){

      setAll([...all, add])
      setClick(0)
    }
  }
  clicked();
  return (
    <div className="App">
      <Addtask  setAdd={setAdd}  setClick={setClick} add={add}   click={click}  setTap={setTap}/>
      {console.log(all) }
     
      <ListAll  all={all} click={click} tap={tap} setEdit={setEdit} change={change} edit={edit}  setActive={setActive}/>
     
     
      <Update edit={edit} setEdit={setEdit}  change={change}  setChange={setChange}/>

      
    </div>
  );
}

export default App;
