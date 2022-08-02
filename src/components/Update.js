import React, { useState } from 'react'
import './update.css'

const Update = (props) => {

    
    
    // let value;
    // const handle = (e) =>{
    //    value = e.target.value;
    //    props.setChange(value) 
    // }

    const Updatetask = (e)=>{
      e.preventDefault();
        props.setUpdate(0);
    }



  return (
    
    <div className={props.update===1? 'update-form' : 'none'} >
      <form method="POST">
        <div className='form'>
      <input type="text"  name="heading"
      //  value={task.heading} 
      placeholder="Heading"
      // onChange={handleInput} 
      // onClick={()=>{
      //   setAdded(0)
      // }}
      />
      <input type="text" id="task" name="description"
      //  value={task.description} 
      placeholder="Description"
      // onChange={handleInput} 
      />
      <input type="text" id="task" name="completed" 
      // value={task.completed}
      placeholder="Completed ?"
      // onChange={handleInput} 
      />
      <input type="text" id="task" name="comments"
      //  value={task.comments} 
      placeholder="Comments"
      // onChange={handleInput} 
      />
      <button  type="submit"
      className='submit '  
      onClick={Updatetask}
      >Update Task</button>
     
     </div>
      </form>
    </div>
    
  );
};

export default Update
