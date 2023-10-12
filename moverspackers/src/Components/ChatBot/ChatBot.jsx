import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faComments, faL } from '@fortawesome/free-solid-svg-icons';
import Chat from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import './chatBot.css';

const ChatBot2 = ({ setIsOpen, isOpen }) => {
  const [userName, setUserName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const toggleChat = () => {
    if (isOpen === 'simplechat') {
      setIsOpen('');
    } else {
      setIsOpen('simplechat');
    }
  };

  const handleUserInput = (value) => {
    console.log('User input:', value);
    setUserName(value);
  };

  const handleOptionSelect = (option) => {
    console.log('Option selected:', option);
    setSelectedOption(option);
  };

  const handleContactDetails = (value) => {
    console.log('Contact Details selected:', value);
    setContactDetails(value);
  };

  const steps = [
    {
      id: '1',
      message: 'Please enter your name',
      trigger: 'user_name_input',
    },
    {
      id: 'user_name_input',
      user: true,
      validator: (value) => {
        if (!value) {
          return 'Please enter your name';
        }
        handleUserInput(value);
        return true;
      },
      trigger: '2',
    },
    {
      id: '2',
      message: `Hi {previousValue}, How can I help you?`,
      trigger: '3',
    },
    {
      id:'3',
      message:'Choose any one of the Service Options',
      user:true,
      trigger:'service_options',
    },
    {
      id: 'service_options',
      options: [
        { value: 'House Shifting', label: 'House Shifting',trigger:'5' },
        { value: 'Office Shifting', label: 'Office Shifting', trigger:'5'},
        { value: 'Hotel Shifting', label: 'Hotel Shifting', trigger:'5'},
        { value: 'Vehicle Transport', label: 'Vehicle Transport', trigger:'5'},
      ],
      validator: (option) => {
        if (!option) {
          return 'Please enter your name';
        }
        handleOptionSelect(option);
        return true;
      },
      trigger: '5',
    },  
    {
      id: '5',
      message: 'Please provide your Email or Mobile Number.',
      user: false,
      trigger: '6',
    },
    {
      id: '6',
      user: true,
      validator: (value) => {
        if (!value) {
          return 'Please provide your email or mobile number';
        }
        handleContactDetails(value);
        return true;
      },
      trigger: 'confirm_contact_details',
    },

    {
      id:'confirm_contact_details',
      message:'Please confirm your Contact details. Type Again.',
      trigger:'select_again'
    },
    {
      id: 'select_again',
      options: [
        { value: 'Email', label: 'Email',trigger:'7' },
        { value: 'Mobile', label: 'Mobile', trigger:'7'},
      ]
    },
    {
      id: '7',
      message: 'Our coordinator will contact you at {previousValue}.',
      trigger: '8',
    },
    {
      id: '8',
      message: `Please confirm your details: \nName: ${userName}\nService Option: ${selectedOption}\nContact Details: ${contactDetails}`,
      trigger: '10',
    },
    // {
    //   id: '9',
    //   component: (
    //     <div>
    //       <h4>Confirm User Details</h4>
    //       <table>
    //         <tbody>
    //           <tr>
    //             <td>Name:</td>
    //             <td>{userName}</td>
    //           </tr>
    //           <tr>
    //             <td>Service Option:</td>
    //             <td>{selectedOption}</td>
    //           </tr>
    //           <tr>
    //             <td>Contact Details:</td>
    //             <td>{contactDetails}</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   ),
    //   trigger: '10',
    // },
    {
      id: '10',
      message: 'Thank you!',
      end: true,
    },
  ];
  
  return (
    <div className={`chatBotContainer ${isOpen === 'simplechat' ? 'open' : ''}`}>
      {isOpen === 'simplechat' ? (
        <div>
          <div className="chatBotHeader">
            <h2>
              <button className="closeButton" onClick={toggleChat}>
                <FontAwesomeIcon icon={faClose} style={{ color: 'white' }} />
              </button>
              <Segment>
                <Chat steps={steps} />
              </Segment>
            </h2>
          </div>
        </div>
      ) : (
        <button className="openButton" onClick={toggleChat}>
          <FontAwesomeIcon icon={faComments} style={{ color: 'white' }} /> Chat
        </button>
      )}
    </div>
  );
};

export default ChatBot2;
