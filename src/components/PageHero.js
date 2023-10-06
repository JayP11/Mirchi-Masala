import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper
      style={{
        backgroundColor: "var(--clr-primary-indianred)",
        minHeight: "20vh",
        margin: "10px 0",
      }}>
      <div>
        <Helmet>
          <title>{`${title} | Mirchi Masala`}</title>
          <meta name="description" content="The Home Use" />
        </Helmet>
        <div className="section-center">
          <h3 className="path-heading">
            <Link to="/">Home</Link>
            {product && <Link to="/products">/ Products</Link>}/ {title}
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 8vh;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 600;
  color: var(--clr-heading-main);
  a {
    ${"" /* color: var(--clr-heading-main); */}
    color: var(--clr-primary-darkred);
    padding: 0.5rem;
    font-weight: 600;
    transition: var(--transition);
  }
  a:hover {
    ${"" /* color: #9b98ee; */}
    color:  var(--clr-white);
  }
  @media screen and (max-width: 420px) {
    .path-heading {
      font-size: 16px !important;
    }
  }
`;

export default PageHero;
