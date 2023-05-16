import React, { useEffect } from "react";
import "./about.css";
import video from "../../Assets/video2.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video2/mp4"></video>

      <div className="aboutContent container">
        <div className="textDiv">
        <h1 data-aos="fade-left" className="smallText">
            About Us
          </h1>

          <h1 data-aos="fade-right" className="aboutTitle">
          At Welcome Packers & Movers, we understand that moving can be a stressful and overwhelming experience. That's why we're here to help make your move as seamless and stress-free as possible.With over 15 years of experience in the packer & movers industry, we have the expertise and knowledge to handle all types of moves, from local to long-distance, residential to commercial. Our team of highly trained professionals is dedicated to providing exceptional service and ensuring that your belongings are safely transported to your new destination.We take pride in our commitment to customer satisfaction, and we go above and beyond to ensure that your moving experience with us exceeds your expectations. From packing and loading to unloading and unpacking, we take care of every aspect of your move so that you can focus on settling into your new home or office.At Welcome Packers & Movers, we use the latest equipment and technology to ensure that your belongings are well-protected during the move. We also offer a range of packing and moving services to fit your specific needs and budget.Our goal is to provide you with a hassle-free moving experience and to make your transition to your new home or office as smooth as possible. So, whether you're moving across town or across the country, trust us to get the job done right. 

Contact us today to learn more about our services and to request a quote.
          </h1>
         
        </div>
        </div>
    </section>
  );
};

export default About;
