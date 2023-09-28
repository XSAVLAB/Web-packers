import React, { useEffect } from "react";
import "./service.css";
import video from "../../Assets/video2.mp4";

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
          <h1 data-aos="fade-right" className="homeTitle">
            Packers & Movers Services in India
          </h1>
        <div>
          <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            GET IN TOUCH
          </span>
          <h1 data-aos="fade-right" className="smallText">
            Address: Shop No.25/24, Opp.HDFC Bank, Hinjewadi Rajiv Gandhi Infotech Park
          </h1>
          <h1 data-aos="fade-right" className="smallText">
          Hinjewadi, Pune- 411057
          </h1>
          <h1 data-aos="fade-right" className="smallText">
          Email - info@welcomepackers.in
          </h1>
          <h1 data-aos="fade-right" className="smallText">
          Contact No - 7988145538 , 8888202978
          </h1>
          </div>
        </div>
        </div>
      </div>
    </section>
    
  );
};

export default Home;
