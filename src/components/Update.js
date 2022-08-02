import React, { useEffect, useState } from 'react'
import './update.css'

const Update = (props) => {

  
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



  // const fetchData = async () => {
  //   const response=await fetch("/"+ props.iid)
      
  //     const data = await response.json()
  //     console.log(data.list);
  //     setTask({
  //       heading: data.list.heading,

  //     });
 
  // }


    const Updatetask = async(e)=>{
      e.preventDefault();
        props.setUpdate(0);
        
        const {heading, description,completed,
        comments} = task;
       console.log(task)
        const res = await fetch("/" + props.iid, {
            method:"PUT",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
        
             heading,
             description,
             completed,
             comments
            })

    })

    setTask({
      heading:"",
      description:"",
      completed:"",
      comments:""
    })
    
    }

    // useEffect(()=>{

    //   fetchData();

    // },[])



  return (
    
    <div className={props.update===1? 'update-form' : 'none'} >
      <form method="PUT">
        <div className='form'>
      <input type="text"  name="heading"
       value={task.heading} 
      placeholder="Heading"
      onChange={handleInput} 
      
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
      <button  type="submit"
      className='submit update-button'  
      onClick={Updatetask}
      >Update Task</button>
     
     </div>
      </form>
    
    </div>
    
  );
};

export default Update
