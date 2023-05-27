import React, {useState} from 'react';
import './style.css';

const MessageForm = (props) => {
    const [enteredText, setEnteredText] = useState('');

    const textChangeHandler = (event) => {
        setEnteredText(event.target.value); 
    };

    const sendMessage = async (event) => {
        event.preventDefault();
       
        if (enteredText === '') {
            checkMessage();
        } else {
            const messageData = {
                id: Math.random().toString(),
                text: enteredText,
                timestamp: new Date().getTime(),
                incoming: false
            };

            const url = `https://api.green-api.com/waInstance${props.idInstance}/SendMessage/${props.apiTokenInstance}`;
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chatId: `${props.phone}@c.us`,
                    message: enteredText,
                }),
            })
            .then(res => {
                if (res.status === 200) {
                    props.onAddMessage(messageData);
                    setEnteredText('');
                } else {
                    console.log(res);
                }
            });
        }
    }

    const checkMessage = async() => {
        const url = `https://api.green-api.com/waInstance${props.idInstance}/receiveNotification/${props.apiTokenInstance}`;
        let receiptId = '';

        await fetch(url, {
            method: "GET",
        })
        .then(response => response.json())
        .then(result => {
            receiptId = result.receiptId;  
            if(result.body.messageData.textMessageData) {
                const messageData = {
                    id: Math.random().toString(),
                    text: result.body.messageData.textMessageData.textMessage,
                    timestamp: result.body.timestamp,
                    incoming: true
                };
                props.onAddMessage(messageData);
            } 
        })
        .catch(error => console.log('error', error));

        setTimeout(async () => {
            if (receiptId !== '') {
            const urlDelete = `https://api.green-api.com/waInstance${props.idInstance}/deleteNotification/${props.apiTokenInstance}/${receiptId}`;
            await fetch(urlDelete, {
                method: "DELETE",
            })
            .then(res => console.log(res));
        }
        }, 1000)
    };

    return (
        <div className='MessageForm'>
            <form onSubmit={sendMessage}>
                <textarea name="" id="" cols="30" rows="5" placeholder="Для отправки сообщения наберите здесь текст и отправьте. Для проверки входящих сообщений отправьте пустую форму(просто нажмите Send message)." value={enteredText} onChange={textChangeHandler}>
                </textarea>
                <button type="submit">Send message</button>
            </form>
        </div>
    )
};

export default MessageForm;