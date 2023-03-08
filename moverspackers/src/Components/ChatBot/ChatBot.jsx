import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

const steps = [
  {
    id: "Greet",
    message: "Hello, Welcome to Packers and Movers",
    trigger: "Ask Name",
  },

  {
    id: "Ask Name",
    message: "Please enter your name",
    trigger: "waiting",
  },

  {
    id: "waiting",
    user: true,
    trigger: "Name",
  },

  {
    id: "Name",
    message: "Hello, Welcome to Packers and Movers",
    trigger: "Ask Name",
  },

  {
    id: "Name",
    message: "Hi{previousValue}, Please select your issue",
    trigger: "issues",
  },

  {
    id: "issues",
    options: [
      { value: "React", label: "React", trigger: "React" },
      { value: "Angular", label: "Angular", trigger: "Angular" },
    ],
  },


  {
    id: "React",
    message: "Thanks for your react issue",
    end: true,
  },

  {
    id: "Angular",
    message: "Thanks for your angular issue",
    end: true,
  }
];

const App = () => {
  return (
    <Segment floated="left">
      <ChatBot steps={steps} />
    </Segment>
  );
};

export default App ;
