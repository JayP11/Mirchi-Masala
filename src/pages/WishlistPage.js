import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { WishlistContent, PageHero } from "../components";
import { useWishlistContext } from "../context/wishlist_context";

const WishlistPage = () => {
  const { wishlist_product } = useWishlistContext();
  window.scrollTo(0, 0)
  console.log('wishlist_product ',wishlist_product)
  if (wishlist_product.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your wishlist is empty</h2>
          <Link to="/products" className="btn">
           Wishlist Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="wishlist" />
      <Wrapper className="page">
        <WishlistContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default WishlistPage;
