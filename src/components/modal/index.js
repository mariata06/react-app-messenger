import React from "react";
import './style.css';

function Modal(props) {

    return (
        <div className='Modal'>
            <div className="Modal-content">
                <div className="Modal-wrapper">
                    <h2 className="Title">{props.title}</h2>
                </div>  
                {props.children}
                <div className="Modal-wrapper">
                    <form onSubmit={props.onSubmit}>
                        <div className="form-input">
                            <label htmlFor="idInstance">User idInstance
                                <input id="idInstance" type="text" placeholder="enter idInstance" onChange={props.onIdChangeInput} value={props.idInstance}/>
                            </label>
                        </div>
                        <div className="form-input">
                            <label htmlFor="apiTokenInstance">User apiTokenInstance
                                <input id="apiTokenInstance" type="text" placeholder="enter apiTokenInstance" onChange={props.onApiChangeInput} value={props.apiTokenInstance}/>
                            </label>
                        </div>
                        <button type="button" onClick={props.onSubmit}>Submit</button>
                    </form>
                </div>
            </div>    
        </div>
    );
}

export default Modal;