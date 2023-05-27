import React from "react";
import './style.css';

function Message(props){
  return (
    <div className='Message'>
        <div className='Message-container'>
            <div className='Message-text '>
                {props.text}
                <span>{props.incoming ? (new Date(props.timestamp*1000)).toLocaleString() : (new Date(props.timestamp)).toLocaleString()}</span>
            </div>
        </div>
    </div>
  );
};

export default Message;
