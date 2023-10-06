import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import heroBcg from "../assets/hero-bcg-2.jpeg";
// import heroBcg2 from "../assets/IMG_7813.jpg";
import Slider from "react-slick";
import data from "../../constants/data";
import IImages from "../../constants/IImages";
import "./hero.css";
import { useHomeContext } from "../../context/home_context";

const Hero = () => {
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   vertical: true,
  //   verticalSwiping: true,
  //   pauseOnHover: false,
  // };
  const [images, setImages] = useState(data.imageHero);
  const [index, setIndex] = useState(0);
  const { home_slider } = useHomeContext();

  // console.log("home sider are", home_slider);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

    // console.log("home_slider", home_slider);
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    // <Section className="section">
    //   <Slider {...settings}>
    //     <div className="item">
    //       <div
    //         className="herobanner"
    //         style={{ backgroundImage: `url(${heroBcg2})` }}
    //       ></div>
    //     </div>
    //     <div className="item">
    //       <div
    //         className="herobanner"
    //         style={{ backgroundImage: `url(${heroBcg})` }}
    //       ></div>
    //     </div>
    //   </Slider>
    // </Section>
    <div>
      {/* <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div> */}
      <div className="section-centerrrr">
        {home_slider.map((image, personIndex) => {
          const { id, image_full_path } = image;
          let positionn = "nextSlide";
          if (personIndex === index) {
            positionn = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === images.length - 1)
          ) {
            positionn = "lastSlide";
          }
          return (
            <aside className={positionn} key={id}>
              {/* <Link to={"/products"} onClick={console.log("linked")}> */}
              <img
                src={image_full_path}
                alt="hotel images"
                className="personn-img"
              />
              {/* </Link> */}
            </aside>
          );
        })}
        {/* <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
            console.log("next", index);
          }}
        >
          <FiChevronRight></FiChevronRight>
        </button> */}
      </div>
    </div>
  );
};

const Section = styled.section`
  padding: 0px;
  overflow: hidden;
  .herobanner {
    height: 100vh;
    // background: url(../assets/hero-bcg.jpeg) background-position:center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
  @media screen and (max-width: 767px) {
    .herobanner {
      height: 350px;
    }
  }
`;

export default Hero;
