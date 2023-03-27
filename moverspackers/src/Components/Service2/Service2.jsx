import React from "react";
import "./service2.css";
import img1 from "../../Assets/house.jpg";
import img2 from "../../Assets/office.jpg";
import img3 from "../../Assets/car.jpg";
import img4 from "../../Assets/storage.jpg";
import img5 from "../../Assets/international.jpg";
import img6 from "../../Assets/pet.jpg";

import video from "../../Assets/video2.mp4"

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
              This service is meant for individuals who need to move their
              household items and furniture to a new location.
            </p>
          </div>

          <div className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3>Office Shifting Services</h3>
            <p>
              This service is meant for corporate organizations that need to
              relocate their office premises to a new location.
            </p>
          </div>

          <div className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>Car Shifting Services</h3>
            <p>
              This service is meant for individuals who need to transport their
              vehicles with security & without any damage to a new location.
            </p>
          </div>

          <div className="singleItem">
            <img src={img4} alt="Image Name" />
            <h3>Storage Services</h3>
            <p>
              This service is meant for individuals who need to temporarily
              store their belongings in a safe and secure place.
            </p>
          </div>

          <div className="singleItem">
            <img src={img5} alt="Image Name" />
            <h3>International Relocation Services</h3>
            <p>
              This service is meant for individuals who need to move to another
              country .
            </p>
          </div>

          <div className="singleItem">
            <img src={img6} alt="Image Name" />
            <h3>Pet Relocation Services</h3>
            <p>
              This service is meant for individuals who need to relocate their
              pets with security to a new location.
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Special Savings! Book For This Saturday And Get 10% Off!</h2>
              <p>
                Packers and movers services are the perfect solutions for anyone
                looking to shift their household, office, or any other
                belongings from one place to another. These services are
                designed to make the relocation process stress-free, convenient,
                and safe. In India, there are numerous packers and movers
                companies that offer a wide range of services to cater to
                different relocation needs. Some of the most common services
                offered by packers and movers in India include household
                shifting, office relocation, car transportation, storage and
                warehousing, packing and unpacking, and loading and unloading.
                These services are designed to make the entire relocation
                process hassle-free and smooth.
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted type='video/mp4' ></video>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service2;
