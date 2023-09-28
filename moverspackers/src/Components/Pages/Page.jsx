import React, {useEffect} from "react";
import "./page.css";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id: 1,
    imgSrc: img5,
  },

  {
    id: 2,
    imgSrc: img6,
  },

  {
    id: 3,
    imgSrc: img7,
  },

  {
    id: 4,
    imgSrc: img8,
  },
  {
    id: 4,
    imgSrc: img9,
  },
  {
    id: 4,
    imgSrc: img10,
  },
];

const Page = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])


  return (
    <section className="page container section">
      <div className="secTitle">
        <h1 data-aos="fade-right" className="title">Gallery</h1>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc}) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc}/>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Page;
