import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 200px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    margin-bottom: 40px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1200px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 950px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 450px) {
    img {
      height: 156px;
    }
  }
`;

export default GridView;
