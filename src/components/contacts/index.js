import React from "react";
import Person from "../person";
import './style.css';

function Contacts(props){
  return (
    <div className='Contacts'>
      <button onClick={props.onAddContact}>Add new contact</button>
      {
      props.contacts.map(person =>
        <div key={person.id} className='Contacts-item' onClick={() => props.toggleChat(person.phonenumber)}>
          <Person
            id={person.id} 
            name={person.name} 
            phonenumber={person.phonenumber} 
            img={person.img}
          />
        </div>
      )}
    </div>
  )
}

export default Contacts;
