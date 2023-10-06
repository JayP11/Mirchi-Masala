import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import Notification from "../utils/Notification";
import { Helmet } from "react-helmet";
import IImages from "../constants/IImages";

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
  Navbar,
  ProductTab,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "../components/Navbar";
import {
  FaPlus,
  FaGrinHearts,
  FaHeart,
  FaRulerHorizontal,
  FaWhatsapp,
  FaMailBulk,
  FaRegHeart,
} from "react-icons/fa";
import { useUserContext } from "../context/user_context";
import { useWishlistContext } from "../context/wishlist_context";

const SingleProductPage = () => {
  // console.log(url);
  const { userid, isLogin } = useUserContext();
  window.scrollTo(0, 0);
  const { addToWishlist, wishlist_product } = useWishlistContext();
  const [fruit, setFruit] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value, setValue] = useState("");
  const [wishlistType, setWishlistType] = useState(1);

  //getting perams
  const paramm = useParams();

  var slug = paramm.id;

  //getting history
  const history = useHistory();

  //getting data from context
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: singleProduct,
    fetchSingleProduct,
  } = useProductsContext();

  //fetch data from single product object
  const {
    name,
    price,
    details,
    stars,
    reviews,
    sku,
    company,
    images,
    description,
    stock,
    product_images,
    is_wishlist,
    id,
    related_products,
    image,
    wholesale_price,
  } = singleProduct;

  console.log("singleproduct array", singleProduct);

  //fetch single product details
  useEffect(() => {
    fetchSingleProduct(`${url}/${slug}/abc/0`);
    // console.log(" single_product is", name);
    // console.log(" location", slug);
  }, [slug]);

  useEffect(() => {
    // console.log(" single_product....", is_wishlist);
    if (is_wishlist) {
      setWishlistType(1);
    } else {
      setWishlistType(2);
    }
    // console.log(" single_product .... wishlistType", wishlistType);
  }, [singleProduct]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  const mAddToWishlist = async () => {
    if (isLogin) {
      if (wishlistType == 1) {
        // remove from wishlist
        var params = {
          calling: 2,
          product_id: id,
          customer_id: userid,
        };
        addToWishlist(singleProduct, params, 2, id);
        setWishlistType(2);
      } else {
        // add to wishlist

        var params = {
          calling: 1,
          product_id: id,
          customer_id: userid,
        };
        addToWishlist(singleProduct, params, 1, id);
        setWishlistType(1);
      }
    } else {
      Notification("error", "Error!", "Please login!");
    }
  };

  //loading
  if (loading) {
    return <Loading />;
  }

  //error
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <Navbar />
      <PageHero title={name} product />
      {/* <Helmet>
        <title>{name ? name : ""} - The Home Use</title>
        <meta name="description" content="The Home Use" />
      </Helmet> */}

      {/* <Helmet>
        <base href="/" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          name="og_site_name"
          property="og:site_name"
          content="thehomeuse.com"
        />
        <meta property="og:url" content="https://thehomeuse.com" />
        <title>{name ? name : ""} | The Home Use</title>
        <meta
          name="og_title"
          property="og:title"
          content="Product Detail - The Home Use"
        />
        <meta name="twitter:title" content="Product Detail - The Home Use" />
        <meta
          name="Keywords"
          content="TheHomeUse, Mop, Plastic, Packages/Offers, Cleaning, Daily Use, House Keeping"
        />
        <meta name="Description" content="The Home Use" />
        <meta property="og:description" content="The Home Use" />
        <meta name="twitter:description" content="The Home Use" />
        <meta
          property="og:image"
          content="https://thehomeuse.com/static/media/weblogo.d4fac576.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
      </Helmet> */}

      <div
        className="section section-center page"
        style={{ paddingTop: "30px" }}>
        <Link to="/products" className="btn-back-to-product">
          back to products
        </Link>
        <div className="product-center">
          {/* gallery */}
          <ProductImages images={product_images} />
          <section className="content">
            <h3 className="sing-prod-heading">{name}</h3>
            {/* ratings */}
            {/* <Stars stars={stars} reviews={reviews} /> */}
            {/* info */}

            {/* <h5 className="pricee">{formatPrice(wholesale_price)}</h5> */}
            {/* <div className="price-check"></div> */}

            <h5 className="price">{formatPrice(value ? value : price)}</h5>
            {stock > 0 && <AddToCart product={singleProduct} />}
            <AddToCart product={singleProduct} />

            {/* <h5>{priceqty.price}</h5>/ */}
            {/* {quantity.map((details) => {
              const { size_name } = details;
              <h5>{size_name}</h5>;
            })} */}
            <b>Available in : </b>
            <div className="qty_map_main">
              {details &&
                details.map((item, index) => {
                  return (
                    <div>
                      <div
                        className="quantity"
                        onClick={() => {
                          setValue(item.price);
                        }}>
                        {item.size_name}
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="description-part-main">
              <div className="description-part">
                <p className="info_last">
                  <span>Description : </span>
                  <p
                    style={{ textAlign: "justify" }}
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}></p>
                </p>
                <hr />
              </div>
            </div>
            {/* <p>{item.price}</p> */}

            {/* <div style={{ display: "flex", gap: "1rem" }}>
              <div className="quantity">1KG</div>
              <div className="quantity">500G</div>
              <div className="quantity">250G</div>
            </div> */}
            <div className="size-box-inner">
              <ul>
                <li onClick={mAddToWishlist}>
                  {wishlistType == 1 ? <FaHeart /> : <FaRegHeart />}
                  {/* <span style={{ paddingTop: "0px" }}>Add to Wishlist</span> */}
                </li>
                <li>{/* <FaRulerHorizontal /> <span>Size Guide</span> */}</li>
              </ul>
            </div>
            {stock > 0 && <ProductTab description={description} />}
            <div className="userinfo">
              <p>Need help placing your order?</p>
              <ul>
                <li>
                  <FaWhatsapp />{" "}
                  <span>Call or WhatsApp us at +91 75758 11223</span>
                </li>
                <li>
                  <FaMailBulk />{" "}
                  <span>E-mail us at theapplified@gmail.com</span>
                </li>
              </ul>
            </div>

            <hr />
          </section>
        </div>
        {/* <hr /> */}

        {/* <div className="similar-prod-img-box">
          <h4>Similar Products</h4>
          <div className="similar-prod-img-box-main">
            {related_products && related_products.length > 0 ? (
              <img
                src={image}
                alt="similar Products"
                className="similar-img active"
              />
            ) : null}
            <div className="similar-img-box">
              {related_products && related_products.length > 0 ? (
                related_products.map((itm, ind) => {
                  return (
                    <Link
                      key={ind}
                      to={`/products/${itm.slug}`}
                      style={{ cursor: "pointer" }}>
                      <img
                        src={itm.image}
                        alt="similar images"
                        className="similar-img before-hover-eff"
                      />
                    </Link>
                  );
                })
              ) : (
                <h4>No Similar product</h4>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .section-center {
    max-width: 80%;
    .btn-back-to-product {
      text-transform: capitalize;
      ${"" /* background: var(--clr-primary-5); */}
      background: var(--clr-primary-indianred);

      color: var(--clr-primary-1);
      padding: 0.375rem 0.75rem;
      letter-spacing: var(--spacing);
      display: inline-block;
      font-weight: 400;
      transition: var(--transition);
      font-size: 18px;
      cursor: pointer;
      box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
      border-radius: var(--radius);
      border-color: transparent;
    }
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 1.2rem;
  }
  .sing-prod-heading {
    ${"" /* color: var(--clr-h5); */}
    color: var(--clr-primary-darkred);
  }
  h3 {
    /* color: var(--clr-h5); */
    font-weight: 400;
    font-size: 22px;
  }
  .price-check {
    height: 2px;
    background-color: red;
    width: 90px;
    margin-top: -12px;
    /* position: absolute; */
  }
  .pricee {
    ${"" /* color: var(--clr-primary-5); */}
    color: var(--clr-primary-darkred);
    font-weight: 400;
    letter-spacing: 0.1em;
    font-size: 18px;
    ${"" /* margin: 20px 0 0 0; */}
    text-decoration: line-through;
    /* position: relative; */
  }
  .price {
    ${"" /* color: var(--clr-primary-5); */}
    color: var(--clr-primary-darkred);
    font-weight: 700;
    letter-spacing: 0.1em;
    font-size: 25px;
    margin: 10px 0 0 0;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 90px 1fr;
    span {
      font-weight: 700;
    }
  }
  .price-box {
    display: flex;
    align-items: center;
    margin: -18px 0 0 0;
  }
  .price-box span {
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
    letter-spacing: 0.1em;
    font-weight: 300;
  }
  .size-box select {
    border: 1px solid #888;
    line-height: 35px;
    height: 35px;
    display: inline-block;
    width: 113px;
    padding: 0 10px;
  }
  .quantity-box {
    padding-left: 20px;
    .qty {
      border: 1px solid #888;
      line-height: 35px;
      height: 35px;
      padding: 0 10px;
      display: flex;
      align-items: center;
    }
    button.qty-btn {
      background: transparent;
      border: none;
      cursor: pointer;
    }
    h2.qty {
      padding: 0 9px;
      font-size: 18px;
      margin: 0;
      min-width: 40px;
      display: inline-block;
      text-align: center;
      border: none;
      width: unset;
      font-weight: 400;
    }
  }
  .addcart-box {
    display: flex;
    align-items: center;
    margin: 8px 0 ;
  }
  .cart-btn button {
    display: inline-block;
    border: none;
    ${"" /* background: var(--clr-primary-5); */}
    background: var(--clr-primary-indianred);
    color: var(--clr-primary-10);
    line-height: 40px;
    letter-spacing: 0.2em;
    font-weight: 100 !important;
    font-size: 15px;
    width: 155px;
    ${"" /* width: 225px; */}
  }
  .cart-btn {
    margin-right: 25px;
  }
  .cart-btn:last-child button {
    background: #686868;
  }
  .cart-btn:last-child button {
    background: #686868;
  }
  .size-box-inner ul {
    display: flex;
    align-items: center;
  }
  .size-box-inner ul svg {
    font-size: 28px;
    ${"" /* color: var(--clr-primary-5); */}
    color: var(--clr-primary-indianred);
    margin: 0px 25px 0px 0px;
    line-height: 35px;
  }
  .size-box-inner ul span {
    font-size: 23px;
    font-weight: 300;
    ${"" /* letter-spacing: 0.2em; */}
  }
  .size-box-inner ul li {
    margin: 0 35px 0 0;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .size-box-inner ul li:last-child svg {
    color: #686868;
    transform: rotate(180deg);
  }
  .size-box-inner {
    padding: 0 0 0 0;
  }
  .userinfo {
    padding: 0 0 0 0;
  }
  .userinfo p {
    ${"" /* margin: 0 0 6px 0; */}
    margin: 0;
    color: #686868;
    letter-spacing: 0.2em;
    font-size: 18px;
  }
  .userinfo li {
    color: #686868;
    font-size: 17px;
    padding: 0px 0 0px 0;
    display: inline-block;
    width: 100%;
    letter-spacing: 0.1em;
  }

  /* New Added css for similar product Cahanges */

  /* .sing-main-img-flex {
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
  } */

  .similar-img {
    height: 145px;
    width: 145px;
    border-radius: var(--radius);
    cursor: pointer;
    object-fit: contain;
  }

  .similar-img-box {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .similar-prod-img-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }

  .similar-prod-img-box-main {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }

  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }

  .before-hover-eff:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: all 0.4s ease-in-out;
  }

  .info_last {
    ${'' /* margin-top: 14px; */}
    ${"" /* display: grid; */}
    display: flex;
    gap: 0.5rem;
    ${"" /* grid-template-columns: 125px 1fr; */}/* width: 450px; */
  }

  .description-part-main {
    /* margin-top: 80px; */
    /* max-width: 1140px; */
    padding-top: 10px;
  }

  .description-part {
    /* width: 385px; */
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .quantity {
    display: flex;
    /* align-items: center; */
    cursor: pointer;
    width: 4rem;
    border: 2px solid;
    padding: 0 0.6rem;
    justify-content: center;
  }

  .qty_map_main {
    display: flex;
    margin: 10px 0;
    gap: 0.5rem;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      // align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 1400px) {
    .product-center {
      display: flex;
      grid-template-columns: unset;
      align-items: end;
      section.content {
        max-width: 50%;
        flex: 0 0 50%;
        .addcart-box {
          flex-wrap: wrap;
          width: 100%;
          .cart-btn {
            margin: 0 0 20px 0;
            width: 100%;
          }

          .info {
            gap: 20px;
          }
        }
        .size-box-inner ul {
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          width: 100%;
          text-align: left;
        }
        .size-box-inner ul li {
          text-align: left;
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .product-center {
      flex-wrap: wrap;
      width: 100%;
      section.content {
        max-width: 100%;
        -webkit-flex: 0 0 100%;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
      }
    }

    .description-part {
      justify-content: flex-start;
    }

    .info_last {
      width: 100%;
    }
  }
  @media screen and (max-width: 575px) {
    .section.section-center.page {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 991px) {
    .info_last {
      grid-template-columns: none;
    }
  }
`;

export default SingleProductPage;
