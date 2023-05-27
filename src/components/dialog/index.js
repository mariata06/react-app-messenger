import React from "react";
import './style.css';
import MessageForm from "../message-form";
import List from "../list";

function Dialog(props){
  return (
    <div className='Dialog'>
      <span className="Dialog-chatid">ChatId: {props.phone}</span>
      <List messages={props.messages}/>

      <MessageForm 
        onAddMessage={props.onAddMessage} 
        idInstance={props.idInstance} 
        apiTokenInstance={props.apiTokenInstance} 
        phone={props.phone}
      />
    </div>
  )
}

export default Dialog;
