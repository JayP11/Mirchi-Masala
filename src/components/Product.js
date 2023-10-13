import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, id, name, price, slug, wholesale_price }) => {
  // console.log("🚀 ~ file: Product.js:8 ~ Product ~ image:", image)
  // console.log(wholesale_price);
  const demoimage =
    "https://t4.ftcdn.net/jpg/05/81/84/71/360_F_581847176_eF540XqFGHDdGPZxyh5NtWHNzgs0XFk6.jpg";

  return (
    <Wrapper>
      <div className="container">
        <Link to={`/products/${slug}/abc/0`}>
          <img
            src={
              image === "" || image === undefined || image === null
                ? demoimage
                : image
            }
            alt={name}
          />
        </Link>
        <Link to={`/products/${slug}/abc/0`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        {/* <p className="pricee">{formatPrice(price)}</p> */}
        {/* <p>{formatPrice(wholesale_price)}</p> */}
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    ${"" /* background: var(--clr-white); */}
    border-radius: var(--radius);
  }

  img {
    width: 100%;
    display: block;
    ${"" /* object-fit: cover; */}
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-indianred);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
  }
  footer h5 {
    ${"" /* color: var(--clr-h5); */}
    color: var(--clr-primary-darkred);
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    ${"" /* color: var(--clr-primary-5); */}
    color: var(--clr-primary-indianred);
    letter-spacing: var(--spacing);
    font-weight: 700;
  }

  .pricee {
    font-size: 14px;
    text-decoration: line-through;
    font-weight: 400;
  }
`;
export default Product;
