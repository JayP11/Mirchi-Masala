import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    produts_error: error,
    featured_products: featured,
  } = useProductsContext();
  console.log(
    "🚀 ~ file: FeaturedProducts.js:15 ~ FeaturedProducts ~ featured:",
    featured
  );

  // console.log("featured_products are ", featured_products);

  // if (loading) {
  //   return <Loading />;
  // }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Our Top Picks For You</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 4).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 200px;
      /* width: 200px; */
      object-fit:cover;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (max-width: 767px) {
    padding-bottom: 10px !important;
  }
  h2 {
    color: var(--clr-heading-main);
  }
`;

export default FeaturedProducts;
