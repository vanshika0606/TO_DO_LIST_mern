import React, { useState } from 'react'
import './All_css.css'

const Addtask = (props) => {

  const [task, setTask] = useState('')
  
  let  value;
  const handleInput = (e)=>{
      
        value= e.target.value;
        setTask(value)

  }

  const clicked =()=>{
       props.setClick(1);
       
       props.setAdd(task)
       
      setTask('')
      
  }
 
  return (
    <div>
      <input type="text" id="task" name="task" value={task} 
    
      onChange={handleInput} 
      />
      <input type="submit" id="submit" value="Add Task" onClick={clicked}/>
    </div>
  )
}

export default Addtask
