import React from 'react';
import './Card.css';
import App from './App';


export default function Card (props){
   
  



  return (
    <div className="Card">
      <button onClick={() => props.onDeleteItem(props.id)}
        type='button'>
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>

    </div>
  )
}

