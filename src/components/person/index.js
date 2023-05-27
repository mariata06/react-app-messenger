import React from "react";
import './style.css';

function Person(props){
  return (
    <div className='Person'>
        <div className='Person-avatar'>
            <img src={props.img} alt="" width="200" height="200"/>
        </div>
        <div className="Person-title">
            <div className="Person-id visually-hidden">{props.id}</div>
            <div className="Person-name">{props.name}</div>
            <div className="Person-phonenumber">{props.phonenumber}</div>
        </div>
    </div>
  );
};

export default Person;