import React, { useEffect } from "react";
import "./contact.css";
import video from "../../Assets/video2.mp4";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobileScreen,faEnvelope, faMapLocationDot} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

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
          <h1 data-aos="fade-down" className="contactTitle">
            Contact Us
          </h1>
          <h3 data-aos="fade-down">
         <a href="G-Map-Location" className="linkDecorationNone" target="_blank">
          <FontAwesomeIcon icon={faMapLocationDot} style={{ color: 'white',height:'19px',width:'25px' }} /> Shop No.25/24, Opp.HDFC Bank, Rajiv Gandhi Infotech Park, Hinjewadi, Pune- 411057</a>  
          </h3>
          <h3 data-aos="fade-down">
          <a href="https://api.whatsapp.com/send?phone=917988145538&text=" className="linkDecorationNone" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white',height:'2rem',width:'2rem' }} /> 7988145538 </a>
          </h3>
          <h3 data-aos="fade-down">
          <a href='tel:+91-8888202978' target='_blank' className="linkDecorationNone">
          <FontAwesomeIcon icon={faMobileScreen} style={{ color: 'white',height:'2rem',width:'2rem' }} /> 8888202978</a>  
          </h3>
          <h3 data-aos="fade-left">
         <a href="mailto:info@welcomepackers.in" className="linkDecorationNone" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white',height:'2rem',width:'2rem' }} /> info@welcomepackers.in </a>
          </h3>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="textDiv">
            <h2 data-aos="fade-left">For Business Enquiry</h2>
          </div>
         
          <form method="post" action="">
            <div className="inputField nameInput">
              <label htmlFor="city">Name</label>
              <input type="text" placeholder="Enter name here..." required />
            </div>

            <div className="inputField mobileNumberInput">
              <label htmlFor="city">Mobile No</label>
              <input
                type="text"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Enter mobile number here..."
                required
              />
            </div>

            <div className="inputField emailInput">
              <label htmlFor="city">Email ID</label>
              <input
                type="email"
                placeholder="Enter email ID here..."
                required
              />
            </div>

            <div className="inputField startingInput">
              <label htmlFor="city">From</label>
              <input
                type="text"
                placeholder="Enter Pickup point address..."
                required
              />
            </div>

            <div className="inputField destinationInput">
              <label htmlFor="city">To</label>
              <input
                type="text"
                placeholder="Enter Destination / Delivery address here..."
                required
              />
            </div>

            <div className="buttonField">
              <button type="submit" id="submit" className="submitBtn">Submit</button>
            </div>
          </form>
        </div>

        {/* <div data-aos="fade-up" className="contactFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <BsTwitter className="icon" />
          </div>

          <div className="leftsIcons">
            <BsListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
