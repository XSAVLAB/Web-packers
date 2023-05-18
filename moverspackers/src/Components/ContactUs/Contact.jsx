import React, { useEffect } from "react";
import "./contact.css";
import video from "../../Assets/video2.mp4";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="contact">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video2/mp4"></video>

      <div className="contactContent container">
        <div className="textDiv">
          <h1 data-aos="fade-right" className="contactTitle">
          Contact Us
          </h1>
          <h2 data-aos="fade-left">Email - info@welcomepackers.in</h2>
          <h1 data-aos="fade-up">
          Contact No -  7988145538 , 8888202978
         </h1>
          
         <p data-aos="fade-up">
          Shop No.25/24,Opp.HDFC Bank
         </p>
         <p data-aos="fade-up">
          Hinjewadi Rajiv Gandhi Infotech Park,Hinjewadi,
         </p>
         <p data-aos="fade-up">
          Pune,Maharashtra- 411057
         </p>
        </div>

         <div data-aos="fade-up" className="cardDiv grid">
          <div className="textDiv">
          <h2 data-aos="fade-left">Business Enquiry</h2>

          </div>
          <div className="destinationInput">
            <label htmlFor="city">Name</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
            </div>
          </div>

          <div className="dateInput">
          <label htmlFor="city">Mobile No</label>
            <div className="input flex">
              <input type="text" placeholder="Enter mobile number here..." />
            </div>
          </div>

          <div className="dateInput">
          <label htmlFor="city">Email ID</label>
            <div className="input flex">
              <input type="text" placeholder="Enter email ID here..." />
            </div>
          </div>

          <div className="dateInput">
          <label htmlFor="city">From</label>
            <div className="input flex">
              <input type="text" placeholder="Enter destination start from here..." />
            </div>
          </div>

          <div className="destination">
          <label htmlFor="city">To</label>
            <div className="input flex">
              <input type="text" placeholder="Enter destination end to here..." />
            </div>
          </div>

          <div className="searchOptions flex">
            <span>Send Message</span>
          </div>  
          </div> 

        <div data-aos="fade-up" className="contactFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <BsTwitter className="icon" />
          </div>

          <div className="leftsIcons">
            <BsListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
