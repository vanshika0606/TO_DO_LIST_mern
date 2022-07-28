import React, { useState } from 'react'

const Update = (props) => {

    
    let  mystyle={
        display: props.edit===1?'block':'none'
    }
    let value;
    const handle = (e) =>{
       value = e.target.value;
       props.setChange(value)
        
        
            
        

    }

    const update = ()=>{
        props.setEdit(0)
    }

  return (
    <div style={mystyle}>
      <input type="text" value={props.change} onChange={handle}/>
      <button   onClick={update}>edit</button>
    </div>
  )
}

export default Update
