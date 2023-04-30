import React, { useEffect } from "react";
import "./home.css";
import video from "../../Assets/video2.mp4";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

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
        <span data-aos="fade-up" className="smallText">
            A complete household transformation
          </span>

          <h1 data-aos="fade-right" className="homeTitle">
            Lets Pack & Move with Welcome Packers & Movers 
          </h1>
          <h2 data-aos="fade-left">Ready to gooo !! Any Time Any Were !!!</h2>
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

        {/* <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Our Address Is</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price"></label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div> */}

        <div data-aos="fade-up" className="homeFooterIcons flex">
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

export default Home;
