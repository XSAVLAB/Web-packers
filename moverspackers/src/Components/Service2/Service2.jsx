import React from "react";
import "./service2.css";
import img1 from "../../Assets/house.jpg";
import img2 from "../../Assets/office.jpg";
import img3 from "../../Assets/car.jpg";
import img4 from "../../Assets/storage.jpg";
import img5 from "../../Assets/international.jpg";
import img6 from "../../Assets/pet.jpg";

import video from "../../Assets/video2.mp4";

const Service2 = () => {
  return (
    <section className="service2 section">
      <div className="secContainer">
        <h2 className="title">Why Welcome Packers & Movers ?</h2>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img1} alt="Image Name" />
            <h3>Household Shifting </h3>
            <p>
              We make household shifting a breeze, with professional packing, loading, unloading, and transportation services to ensure your belongings arrive safe and sound.
            </p>
          </div>

          <div className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3>Office Shifting Services</h3>
            <p>
            We help businesses of all sizes relocate their offices efficiently and stress-free, with minimal disruption to operations.
            </p>
          </div>

          <div className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>Car Shifting Services</h3>
            <p>
            We transport your car safely and securely to your new destination, using specialized equipment and experienced drivers.
            </p>
          </div>

          <div className="singleItem">
            <img src={img4} alt="Image Name" />
            <h3>Storage Services</h3>
            <p>
            We offer secure and affordable storage solutions for your belongings, whether you're moving to a new home, renovating, or simply need to declutter.
            </p>
          </div>

          <div className="singleItem">
            <img src={img5} alt="Image Name" />
            <h3>International Relocation Services</h3>
            <p>
            We guide you through every step of the international relocation process, from packing and shipping to customs clearance and arrival assistance.
            </p>
          </div>

          <div className="singleItem">
            <img src={img6} alt="Image Name" />
            <h3>Pet Relocation Services</h3>
            <p>
            We help you move your furry friends to your new home safely and comfortably, with all the necessary documentation and arrangements taken care of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service2;
