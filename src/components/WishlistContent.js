import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import WishlistColumns from "./WishlistColumns";
import WishlistItem from "./WishlistItem";
import { useWishlistContext } from "../context/wishlist_context";

const WishlistContent = () => {
  const { wishlist_product } = useWishlistContext();
  return (
    <Wrapper className="section section-center">
      {/* heading for cart screen tables  */}
      <WishlistColumns />
      {/* cart items */}
      {wishlist_product.map((item) => {
        return <WishlistItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        {/* <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button> */}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    ${"" /* background: var(--clr-primary-5); */}
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default WishlistContent;
