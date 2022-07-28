import React, { useEffect, useState } from 'react'
import "./ListAll.css"
const ListAll = (props) => {

  let i=0;
  
 
   
  return (
    <div>
      <ul>
      
        {props.all.map(task =>(
          
          <li 
           id={"list"+i.toString()}
          
          
          key={i++}>{task}
          
          <button  
           id="delete"
           onClick={(event)=>{
            
            const m=event.currentTarget.parentElement.id;
            var element= document.getElementById(m);
             element.classList.add("none")
           
           }}

          >. x</button>
          <button id="edit" onClick={
            (event)=>{
              props.setEdit(1)
              const m=event.currentTarget.parentElement.id;
               console.log(props.edit)
             
               props.setActive(m)
              
               let content = document.getElementById(m).textContent;
               console.log(content)

               let array = content.split('.');
               array[0]='m'
               console.log(array[0])
            
          
            }

          }>edit</button>
          </li>
          
         

        ))}
      </ul>
      
    </div>
  )
}

export default ListAll;
