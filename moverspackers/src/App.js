import React, {useState} from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ChatBotRight from "./Components/ChatBot/ChatBot";
import Service from "./Components/Service/Service";
import Service2 from "./Components/Service2/Service2";
import Service3 from "./Components/Service2/Service3";
import Contacts from "./Components/ContactUs/Contact";
import WhatsappChatBot from './Components/WhatsappChatBot/WhatsappChatBot';



import AboutUs from "./Components/AboutUs/AboutUs";
import Pages from "./Components/Pages/Page";

import { Route, Switch } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(); // State to control chat visibility

  return (
    <>
      <Navbar />
      <WhatsappChatBot setIsOpen={setIsOpen} isOpen={isOpen}/>
      <ChatBotRight setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Switch>
        <Route exact path="/">
          <Home />
          <Main />
          <Footer />
        </Route>

        <Route path="/service">
        <Service/>
        <Service2/>
        <Service3/>
        </Route>

        <Route path="/aboutUs">
          <AboutUs />
          {/* <Footer /> */}
        </Route>

        <Route path="/pages">
          <Pages />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>

      </Switch>
    </>
  );
};

export default App;
