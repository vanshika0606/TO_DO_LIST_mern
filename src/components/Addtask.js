
import React, {  useState } from 'react'

import './Addtask.css'


const Addtask = (props) => {

  const [added, setAdded] = useState(0)

  

  const [task, setTask] = useState({
    heading:"",
    description:"",
    completed:"",
    comments:""
  })
  
  let  value, name;
  const handleInput = (e)=>{
        
        name= e.target.name;
        value= e.target.value;
        setTask({...task, [name]:value})

  }

  const Addtask = async(e)=>{
    e.preventDefault();
    
    const {heading, description, completed, comments} = task;
    
   const res = await fetch("http://localhost:3000/add" , {
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      
      heading, description, completed, comments
      
    })
   
   });

   const data =await res.json();
   
  
   
  setAdded(1);

  setTask({
    heading:"",
    description:"",
    completed:"",
    comments:""
  })
   
}


const fetchData = async (e) => {
    
  e.preventDefault();
    

  props.setClick(1);
    
  };

 
 
  return (
    <div className={props.click===0?'form-body' : 'none' }>
      <form method="POST">
        <div className='form'>
      <input type="text"  name="heading"
       value={task.heading} 
      placeholder="Heading"
      onChange={handleInput} 
      onClick={()=>{
        setAdded(0)
      }}
      />
      <input type="text" id="task" name="description"
       value={task.description} 
      placeholder="Description"
      onChange={handleInput} 
      />
      <input type="text" id="task" name="completed" 
      value={task.completed}
      placeholder="Completed ?"
      onChange={handleInput} 
      />
      <input type="text" id="task" name="comments"
       value={task.comments} 
      placeholder="Comments"
      onChange={handleInput} 
      />
      <button type="submit" 
      className='submit'  
      onClick={Addtask}
      >Add Task</button>

      
      <div className={ added?"task-add":"none" }  >Task added successfully</div>
      </div>
      
      <div>
      <button  className="show_all submit"  
      onClick={fetchData}
      
      >Show All Task</button>
      </div>
      
      </form>
      
    </div>
  )
}

export default Addtask
