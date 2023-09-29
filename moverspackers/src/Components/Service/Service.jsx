import React, { useEffect } from "react";
import "./service.css";
import video from "../../Assets/video2.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobileScreen,faEnvelope, faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video2/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <h1 data-aos="fade-right" className="homeTitle">
            Packers & Movers Services in India
          </h1>
        <div>
          <div className="textDiv">
          <h1 data-aos="fade-up">
            GET IN TOUCH
          </h1>
          <p data-aos="fade-up">
         <a href="G-Map-Location" className="linkDecorationNone" target="_blank">
          <FontAwesomeIcon icon={faMapLocationDot} style={{ color: 'white',height:'19px',width:'25px' }} /> Shop No.25/24, Opp.HDFC Bank, 
          Rajiv Gandhi Infotech Park, Hinjewadi, Pune- 411057</a> 
         </p>
         <p data-aos="fade-up">
         <a href="mailto:info@welcomepackers.in" className="linkDecorationNone" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white',height:'19px',width:'25px' }} /> info@welcomepackers.in </a>
         </p>
         <p data-aos="fade-up">
          <a href="https://api.whatsapp.com/send?phone=917988145538&text=" className="linkDecorationNone" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white',height:'19px',width:'25px' }} /> 7988145538</a>
         </p>
         <p data-aos="fade-up">
          <a href='tel:+91-8888202978' target='_blank' className="linkDecorationNone">
          <FontAwesomeIcon icon={faMobileScreen} style={{ color: 'white',height:'17px',width:'25px' }} /> 8888202978</a>
         </p>
          </div>
        </div>
        </div>
      </div>
    </section>
    
  );
};

export default Home;
