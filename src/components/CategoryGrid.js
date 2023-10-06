import React from "react";
import { useHomeContext } from "../context/home_context";
import { getUniqueValues } from "../utils/helpers";
import bgimg from "../assets/product-img2.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { useUserContext } from "../context/user_context";
import { useFilterContext } from "../context/filter_context";

const CategoryGrid = () => {
  const { updateFilters } = useFilterContext();
  const { categories } = useHomeContext();

  // console.log("categories are", categories);

  // const categories = getUniqueValues(all_products, "category");
  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>Category</h2>
          <div className="underline"></div>
        </div>
        <div className="row">
          {categories.slice(0, 6).map((c, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Link to={`/products`}>
                  <img src={c.image_full_path} alt="" />
                  <button
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    value={c.name}
                    // className={${category === c.toLowerCase() ? "active" : null}}
                  >
                    {c.name}
                  </button>
                </Link>

                {/* <a>{c.name}</a> */}
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  ${'' /* padding: 60px 0 0 0; */}
  padding: 60px 0;
  .title {
    margin-bottom: 30px;
    h2 {
      color: #0f0d4f;
    }
  }
  h5 {
    font-size: 27px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 0px 0px 20px 0;
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    gap: 1rem;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    ${'' /* margin-right: -50px;
    margin-left: -50px; */}
    justify-content: center;
  }
  .col-md-4 {
    height: 150px;
    width: 150px;
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    ${"" /* max-width: 33.333333%; */}
    ${"" /* padding: 0 50px; */}
    text-align: center;
    ${"" /* margin-bottom: 30px; */}
    position: relative;
    overflow: hidden;
    a {
      img {
        ${"" /* max-width: 100%; */}
        height:100%;
        width: 100%;
        object-fit: cover;
        display: flex;
      }
      button {
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0px;
        background: rgb(0 0 0/0.5);
        width: calc(100% - 100px);
        margin: 0 auto;
        color: #fff;
        font-size: 28px;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        transform: translateY(100%);
        transition: all 0.5s ease;
        visibility: hidden;
        opacity: 0;
        cursor: pointer;
      }
      :hover {
        button {
          transform: translateY(0%);
          visibility: visible;
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }
  button {
    border: none;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (max-width: 1199px) {
    .row {
      margin-right: 0px;
      margin-left: 0px;
      .col-md-4 {
        ${"" /* padding: 0 20px; */}
      }
      .col-md-4 button {
        width: calc(100% - 40px);
      }
    }
  }
  @media (max-width: 767px) {
    .row {
      margin-right: -15px;
      margin-left: -15px;
    }
    .col-md-4 {
      padding: 0 15px;
      max-width: 50%;
      flex: 0 0 50%;
    }
    .col-md-4 a button {
      width: calc(100% - 30px) !important;
      font-size: 18px !important;

      transform: translateY(0%);
      visibility: visible;
      opacity: 1;
      cursor: pointer;
    }
  }
  ${'' /* @media (max-width: 475px) { */}
  @media (max-width: 767px) {
    .col-md-4 {
      padding: 0 15px;
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
`;

export default CategoryGrid;
