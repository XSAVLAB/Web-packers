import React, {useEffect} from "react";
import "./footer.css";
import video from "../../Assets/video2.mp4";

import { FiSend } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type="video2/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <TbTruckDelivery className="icon" />
                Welcome Packes and Movers.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Packers and movers are given intense training to load the
              materials properly. Therefore, they can easily handle heavy goods
              and load them into the car.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hostelworls
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Advisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE </span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Mumbai
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Banglore
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Pune
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Goa
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
               <small>BEST PAKERS AND MOVERS WEBSITE THEME</small>
               <small>COPYRIGHTS RESERVED</small>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Footer;
