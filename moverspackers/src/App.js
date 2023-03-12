import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ChatBot from "./Components/ChatBot/ChatBot";
import Service from "./Components/Service/Service";
import Service2 from "./Components/Service2/Service2";
import Service3 from "./Components/Service2/Service3";


import AboutUs from "./Components/AboutUs/AboutUs";
import Pages from "./Components/Pages/Page";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
          <Main />
          <Footer />
          <ChatBot />
        </Route>

        <Route path="/service">
        <Service/>
        <Service2/>
        <Service3/>
        </Route>

        <Route path="/aboutUs">
          <AboutUs />
        </Route>

        <Route path="/pages">
          <Pages />
        </Route>



      </Switch>
    </>
  );
};

export default App;
