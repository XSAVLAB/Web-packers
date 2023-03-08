import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ChatBot from './Components/ChatBot/ChatBot'


const App = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <Main/>
   <Footer/>
   <ChatBot/>
   </>
    )
  
}

export default App;
