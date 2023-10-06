import React, { useEffect, useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {

  const [main, setMain] = useState(images[0]);
  const [getMain, setMani] = useState(main.url);

  useEffect(() => {
    setMani(main.url);
    console.log("getMain", getMain);
  }, [main]);

  return (
    <Wrapper>
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              // src={image}
              // src=""
              alt={image.image_type}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url == main.url ? "active" : null}`}
            />
          );
        })}
      </div>
      {/* <div className="sing-main-img-flex"> */}
      {/* {console.log("main url is", main.url)} */}
      <img src={main.url} alt="main image" className="main-image" />
      <SideBySideMagnifier
        alwaysInPlace={true}
        imageSrc={main.url}

        interactionSettings={{ tapDurationInMs: 300 }}
        className="main-image"
      />

      {/* <div className="similar-prod-img-box">  
          <h5>Similar Products</h5>
          <div className="similar-img-box">
            <img src={main.url} alt="similar images" className="similar-img" />
          </div>
        </div>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  .main-image {
    height: 500px;
    max-width: calc(100% - 155px);
    display: flex;
    width: unset !important;
    object-fit: contain;
    margin-top: 15px;
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .gallery {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 40px;
    max-height: 670px;
    overflow-y: scroll;
    padding: 5px 20px 0 5px;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--clr-primary-5);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--clr-primary-5);
    }
    img {
      height: 100px;
      width: 90px;
      cursor: pointer;
      margin-bottom: 20px;
      object-fit: contain;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }

  @media (max-width: 576px) {
    .main-image {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main-image {
      /* height: 750px; */
    }
    .gallery {
      img {
        /* height: 175px; */
      }
    }
  }
  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    max-width: 50%;
    flex: 0 0 50%;
    .main-image {
      width: 100% !important;
      max-width: 100%;
      height: 600px;
    }
    .gallery {
      flex-direction: unset !important;
      overflow: hidden !important;
      overflow-x: scroll !important;
      max-height: unset;
      max-width: 100%;
      img {
        height: 150px !important;
        margin: 10px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
    flex: 0 0 100%;
    .main-image {
      height: 440px;
      object-position: top;
    }
  }

  @media screen and (max-width: 1540px) {
    .main-image {
      margin-top: 0px;
      height: 450px;
    }
  }

  @media screen and (max-width: 2560px) {
    .main-image {
      height: 830px;
    }
  }

  @media screen and (max-width: 2260px) {
    .main-image {
      height: 715px;
    }
  }

  @media screen and (max-width: 1920px) {
    .main-image {
      height: 580px;
    }
  }

  @media screen and (max-width: 450px) {
    .main-image {
      height: 400px;
    }
  }
`;

export default ProductImages;
