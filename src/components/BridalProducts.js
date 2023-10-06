import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaShoppingCart,
  FaUserMinus,
  FaUserPlus,
  FaSistrix,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import Slider from "react-slick";
import lefticon from "../assets/left.png";
import righticon from "../assets/right.png";

const BridalProducts = () => {
  // const {
  //   products_loading: loading,
  //   produts_error: error,
  //   trending_products: tranding,
  // } = useProductsContext();
  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <Error />;
  // }

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         autoplay: false,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         autoplay: false,
  //       },
  //     },
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         autoplay: false,
  //       },
  //     },
  //   ],
  // };
  return (
    // <Wrapper className="section">
    //   <div className="title">
    //     <h2>DEEPKALA BRIDE</h2>
    //     <div className="underline"></div>
    //   </div>
    //   <div className="section-center featured bridalproductimg">
    //     <Slider {...settings}>
    {
      /* {tranding.slice(0, 6).map((product) => {
            return <Product className="test" key={product.id} {...product} />;
          })} */
    }
    // {/* <div>
    //   <img src="../assets/brideimages1.jpg" alt="" />
    // </div>
    // <div>
    //   <img src="../assets/brideimages2.jpg" alt="" />
    // </div> */}
    //       <div>
    //         <img src="../assets/brideimages3.jpg" alt="" />
    //       </div>
    //       <div>
    //         <img src="../assets/brideimages4.jpeg" alt="" />
    //       </div>
    //       <div>
    //         <img src="../assets/brideimages5.jpeg" alt="" />
    //       </div>
    //       <div>
    //         <img src="../assets/brideimages6.jpeg" alt="" />
    //       </div>
    //       <div>
    //         <img src="../assets/brideimages7.jpg" alt="" />
    //       </div>
    //       <div>
    //         <img src="../assets/brideimages8.jpg" alt="" />
    //       </div>
    //       <div>
    //         <img src="../assets/brideimages9.jpg" alt="" />
    //       </div>
    //       <div>
    //         <img src="../assets/brideimages10.jpg" alt="" />
    //       </div>
    //       <div>
    //         <img src="../assets/brideimages11.jpg" alt="" />
    //       </div>
    //     </Slider>
    //   </div>
    // </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  margin: 4rem 0 0 0;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    max-width: 80%;
    img {
      height: unset;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .slick-track {
    /* grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); */
    margin: 0.5rem auto;
    display: flex;
  }
  .slick-slide {
    padding: 0 25px;
  }
  .slick-slider button {
    font-size: 0;
    border: none;
    outline: none;
    box-shadow: none;
    position: relative;
    background: transparent;
    position: absolute;
    cursor: pointer;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
  button.slick-arrow.slick-next {
    left: unset;
    right: 5%;
  }
  button.slick-arrow.slick-prev::after {
    content: "";
    background-image: url(${lefticon});
    font-size: 18px;
    display: inline-block;
    width: 55px;
    height: 32px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  button.slick-arrow.slick-next::after {
    content: "";
    background-image: url(${righticon});
    font-size: 18px;
    display: inline-block;
    width: 55px;
    height: 32px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .slick-list {
    margin: 0px -5px 0px -5px;
  }

  .bridalproductimg {
    img {
      max-width: 100%;
      min-height: 430px;
      max-height: 430px;
      width: 100%;
      object-fit: cover;
      object-position: center;
      display: flex;
    }
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      overflow: hidden;
    }
  }
  @media (max-width: 1199px) {
    .slick-track {
      display: flex;
    }
    padding-bottom: 40px;
    .featured {
      margin-bottom: 0px;
      position: relative;
      overflow: visible;
      max-width: 100%;
    }
    .slick-list {
      overflow: hidden;
    }
    .slick-slider button {
      left: -30px;
    }
    button.slick-arrow.slick-next {
      left: unset;
      right: -30px;
    }
  }
  @media (max-width: 767px) {
    .slick-track {
      grid-template-columns: unset !important;
      display: flex !important;
    }
    .featured {
      display: flex !important;
    }
    .slick-list {
      width: 100% !important;
      display: flex;
      max-width: 100%;
      overflow: hidden;
    }
    padding-bottom: 70px !important;
    .section-center.featured {
      margin-bottom: 0px !important;
    }
    .slick-slider.slick-initialized {
      width: 100%;
      overflow: hidden;
    }
    .slick-slider button {
      top: unset !important;
      bottom: -40px;
      left: 30% !important;
    }
    button.slick-arrow.slick-next {
      left: unset !important;
      right: 30% !important;
    }
  }

  @media screen and (max-width: 600px) {
    .slick-slide {
      padding: 0 0px;
    }
    footer {
      padding: 0 15px 15px;
    }
  }
`;

export default BridalProducts;
