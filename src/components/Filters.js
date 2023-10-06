import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      min_price,
      max_price,
      price,
      color,
      shipping,
      occasion,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const occasions = getUniqueValues(all_products, "occasion");
  const colors = getUniqueValues(all_products, "colors");
  // console.log(colors);

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    value={c}
                    className={`${category === c ? "active" : null}`}>
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div> */}

          
          {/* end of categories */}
          {/* Occasions */}
          {/* <div className="form-control">
            <h5>Occasion</h5>
            <div>
              {occasions.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="occasion"
                    value={c}
                    className={`${occasion === c ? "active" : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div> */}
          {/* <div className="form-control">
            <h5>Occasion</h5>
            <select
              name="occasion"
              value={occasion}
              onChange={updateFilters}
              className="occasion"
            >
              {occasions.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div> */}
          {/* end of companies */}
          {/* colors */}
          {/* <div className="form-control">
              <h5>Colors</h5>
              <div className="colors">
                {colors.map((c, index) => {
                  if (c === "all") {
                    return (
                      <button
                        key={index}
                        name="color"
                        onClick={updateFilters}
                        data-color="all"
                        className={`${
                          color === "all" ? "all-btn active" : "all-btn"
                        }`}
                      >
                        All
                      </button>
                    );
                  }
                  return (
                    <button
                      key={index}
                      name="color"
                      style={{ background: c }}
                      className={`${
                        color === c ? "color-btn active" : "color-btn"
                      }`}
                      data-color={c}
                      onClick={updateFilters}
                    >
                      {color === c ? <FaCheck /> : null}
                    </button>
                  );
                })}
              </div>
            </div> */}
          {/* end of colors */}
          {/* price */}

          {/* end of price */}
          {/* shipping */}
          {/* <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div> */}
          {/* end of shipping */}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    ${'' /* color: var(--clr-grey-5); */}
    cursor: pointer;
    font-size: 14px;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  button.all-btn {
    flex: 0 0 100%;
    border: none;
    text-align: left;
    justify-content: start !important;
    position: relative;
  }
  button.all-btn.active:after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: -1px;
    width: 20px;
    height: 1px;
    background: var(--clr-grey-5);
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
