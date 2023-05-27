import React, { useState } from 'react';
import './App.css';
import Contacts from './components/contacts';
import Dialog from './components/dialog';
import Modal from './components/modal';
import NewContact from './components/new-contact';

//Dummy contacts для демонстрации 
const CONTACTS_LIST = [
  {
    id: 'person1',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU',
    name: "Max",
    phonenumber: '12324558899',
    messages: [
      {
        id: 'mess1',
        text: 'Hello Maria',
        timestamp: new Date().getTime(),
        incoming: true
      },
      {
        id: 'mess2',
        text: 'How are you doing?',
        timestamp: new Date().getTime(),
        incoming: false
      },
    ]
  },
  {
    id: 'person2',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMahB5uQpvTdBdY38JQPtnB68YWGvshZXJVw&usqp=CAU',
    name: "Maria",
    phonenumber: '15439756877',
    messages: [
      {
        id: 'mess3',
        text: 'Privet Max',
        timestamp: new Date().getTime(),
        incoming: true

      },
      {
        id: 'mess4',
        text: 'How are you doing?',
        timestamp: new Date().getTime(),
        incoming: false
      },
    ]
  },
];  

function App() {
  //Исходное состояние модалки авторизации
  const [modalIsOpen, setModalIsOpen] = useState(true);

  //Исходное состояние модалки добавления нового контакта
  const [modalContactIsOpen, setModalContactIsOpen] = useState(false);

  const [contacts, setContacts] = useState(CONTACTS_LIST);
  const [messages, setMessages] = useState([]);

  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const [phone, setPhone] = useState('');

  const [enteredName, setEnteredName] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');

  const contactNameChangeHandler = (event) => {
      setEnteredName(event.target.value); 
  };

  const contactPhoneChangeHandler = (event) => {
      setEnteredPhone(event.target.value);
  };

  const submitContactHandler = (event) => {
    event.preventDefault();

    const contactData = {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWLjkYKGswBE2f9mynFkd8oPT1W4Gx8RpDQ&usqp=CAU',
        id: Math.random().toString(),
        name: enteredName,
        phonenumber: enteredPhone,
        messages: []
    }; 
    
    setContacts((prevContacts) => {
      return [...prevContacts, contactData];
    })
    addContactToggle();
    setEnteredName('');
    setEnteredPhone('');
    setPhone(contactData.phonenumber);
    setMessages([]);
  }

  const idInstanceChangeHandler = (event) => {
    setIdInstance(event.target.value); 
  };

  const apiTokenInstancChangeHandler = (event) => {
    setApiTokenInstance(event.target.value); 
  };

  const submitAuthorizedHandler = () => {
    let authorised = true;
    if (authorised){
      setModalIsOpen(prev => !prev);
    } else {
      setIdInstance('');
      setApiTokenInstance('');
    }
  };

  const addMessageHandler = (message) => {
    setMessages((prevMessages) => {
      return [...prevMessages, message];
    });
  };

  const addContactToggle = () => {
    setModalContactIsOpen(prev => !prev);
  };

  const toggleChat = (chatPhone) => {
    setPhone(chatPhone);
    contacts.map((contact) => {
      if (contact.phonenumber === chatPhone) {
        setMessages(contact.messages);
      }
    })
  }

  return (
      <div className="App">
        <div className='container'>
          <Contacts 
            contacts={contacts} 
            onAddContact={addContactToggle}
            toggleChat={toggleChat}
          />

          <Dialog className="Wrapper"
            messages={messages}
            onAddMessage={addMessageHandler} 
            idInstance={idInstance} 
            apiTokenInstance={apiTokenInstance} 
            phone={phone}
          />
            
        </div>
        { modalIsOpen && 
          <Modal 
            title={'Authorization'} 
            onSubmit={submitAuthorizedHandler} 
            onIdChangeInput={idInstanceChangeHandler} 
            onApiChangeInput={apiTokenInstancChangeHandler} 
            idInstance={idInstance} 
            apiTokenInstance={apiTokenInstance}>
          </Modal>
        }

        { modalContactIsOpen && 
          <NewContact 
            btnName={'Close'} 
            title={'Add new contact'} 
            closeModal={addContactToggle} 
            onSubmit={submitContactHandler} 
            onNameChangeInput={contactNameChangeHandler} 
            onPhoneChangeInput={contactPhoneChangeHandler}>
          </NewContact>
        }

      </div>
    
  );
}

export default App;

