import React from "react";
import './style.css';

function NewContact(props) {
    return (
        <div className='NewContact'>
            <div className="NewContact-content">
                <div className="NewContact-wrapper">
                    <h2 className="Title">{props.title}</h2>
                    <button type="button" onClick={props.closeModal}>Close</button>
                </div>  
                <div className="NewContact-wrapper">
                    <form onSubmit={props.submitContactHandler}>
                        <div className="form-input">
                            <label htmlFor="contact-name">Contact name
                                <input id="contact-name" type="text" placeholder="enter Contact name" onChange={props.onNameChangeInput} value={props.enteredName}/>
                            </label>
                        </div>
                        <div className="form-input">
                            <label htmlFor="contact-phone">Contact phone number
                                <input id="contact-phone" type="text" placeholder="enter Contact phone number" onChange={props.onPhoneChangeInput} value={props.enteredPhone}/>
                            </label>
                        </div>
                        <button type="button" onClick={props.onSubmit}>Submit</button>
                    </form>
                </div>
            </div>    
        </div>
    );
}

export default NewContact;