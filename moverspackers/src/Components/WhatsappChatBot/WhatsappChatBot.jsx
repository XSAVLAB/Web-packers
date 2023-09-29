import React, { useState } from 'react';
import './WhatsappChatBot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp, faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";


const WhatsappChatBot = ({setIsOpen,isOpen}) => {
  const [message, setMessage] = useState('');
  const userPhoneNumber = '';

  const handleSendMessage = () => {
    alert(`Message sent: ${message}`);
    setMessage('');
  };

  const toggleChat = () => {
    if(isOpen==='whatsappchat'){
    setIsOpen();
    }
    else{
      setIsOpen('whatsappchat');
    }
  };

  return (
    <div className={`whatsapp-chat-container ${isOpen==='whatsappchat' ? 'open' : ''}`}>
      {isOpen==='whatsappchat' ? (
        <div>
          <div className="chat-header">
            <h2>
            <FontAwesomeIcon icon={ faWhatsappSquare } style={{ color: 'white',height:'25px',width:'30px' }} />
             <em>WhatsApp Chat</em>
              <button className="close-button" onClick={toggleChat}>
                Close
            </button>
            </h2>
            
          </div>
          <div className="chat-body">

          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <a href="https://api.whatsapp.com/send?phone=917988145538&text=" target='_blank'>
            <button onClick={handleSendMessage}>
            Send
            </button></a>
          </div>
        </div>
      ) : (
        <button className="open-button" onClick={toggleChat}>
          <FontAwesomeIcon icon={ faWhatsappSquare } style={{ color: 'rgb(37,211,102)',height:'5rem',width:'4rem' }} /> 
          </button>
      )}
    </div>
  );
};

export default WhatsappChatBot;



