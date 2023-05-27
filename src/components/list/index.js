import React from "react";
import Message from "../message";
import './style.css';

function List(props){
    return (
        <div className='List'>{
            props.messages.map(message =>
                <div key={message.id} className={message.incoming ? 'List-item List-item--left' : 'List-item List-item--right'}>
                    <Message id={message.id} text={message.text} timestamp={message.timestamp}/>
                </div>
            )}
        </div>
    )
}

export default List;