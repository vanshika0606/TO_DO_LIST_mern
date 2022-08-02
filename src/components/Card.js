import React, { useEffect, useState }  from "react";
import "./Card.css";
const Card = (props) => {

  const [lists, setLists] =useState([])

  const backtask =()=>{

    props.setClick(0)
  }

  const fetchData = async () => {
    
    
       fetch("http://localhost:3000/lists").then((res)=>{
  
            return res.json();
       }).then(async(data)=>{
          
            setLists(data.list)
            
       });
  
    
      
    };

useEffect(()=>{
   
  fetchData()
}
,[lists])


  

  return (
     <div className=
     {
      props.click===0?'none':'shoow'}>
      
      <h2>All Tasks</h2>
       <button  onClick={backtask} className="go-to-add">  Go to Add tasks</button>
      <div className="cardss">
        {  lists.map( l => {
           return <div className="card" key={l._id}>
             <h3>{l.heading}</h3>
            <p>description - {l.description}</p>
            <p>completed ? - {l.completed}</p>
            <p>comments - {l.comments}</p>

            <div className="delete-edit-butttons">
              <span className="delete" onClick={ ()=>{
               
               
                
                  fetch('http://localhost:3000/' +l._id, {
                    method: 'DELETE',
              })

             

              }}>Delete</span>
              <span className="update" onClick = {()=>{
               console.log(l._id)
               props.setIid(l._id)
               props.setUpdate(1)

              }}>Update</span>
            </div>
          </div>
        })}
      </div>
      </div>
   
  );
};

export default Card;
