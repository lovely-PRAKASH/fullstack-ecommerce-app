import React from "react";
import HomeBanner from "../Components/homeBanner/homeBanner";
import banner from "../../src/assets/sideBanner.jpg";
import banner2 from "../../src/assets/Banner2.jpg";
import { Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
<<<<<<< HEAD

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
=======
// swiper for product navigation slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
>>>>>>> 3bb190bf70e2a7d49f456fefdd8cbd5270a8df3b

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import ProductCard from "../Components/productCard/ProductCard";

function Home() {
  return (
    <>
<<<<<<< HEAD
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner} alt="side banner" className="cursor" />
              </div>
              <div className="banner mt-4">
                <img src={banner2} alt="side banner" className="cursor" />
              </div>
              <div className="banner">
                <img src={banner} alt="side banner" className="cursor" />
              </div>
              <div className="banner mt-4">
                <img src={banner2} alt="side banner" className="cursor" />
=======
{/*       carosoul banner */}
    <HomeBanner/>
{/*product listing section starts here  */}
    <section className='homeProducts'>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="banner">
            <img src={banner} alt="side banner" className='cursor' />
            </div>
          </div>
          <div className="col-md-9 productRow">
            <div className="d-flex align-items-center">
              <div className="info w-75">
                <h3 className='hd mb-0'>BEST SELLERS
                </h3>
                <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of March.
                </p>
>>>>>>> 3bb190bf70e2a7d49f456fefdd8cbd5270a8df3b
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="hd mb-0">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  view All <BsArrowRight />
                </Button>
              </div>
              <div className="product_row w-100 mt-4 ">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-4">
                <div className="info w-75">
                  <h3 className="hd mb-0">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  view All <BsArrowRight />
                </Button>
              </div>
              <div className="product_row w-100 mt-4 ">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                </Swiper>
              </div>
              {/*  */}
              <div className="d-flex align-items-center mt-4">
                <div className="info w-75">
                  <h3 className="hd mb-0">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  view All <BsArrowRight />
                </Button>
              </div>
              <div className="product_row productRow2 d-flex w-100 mt-4 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

<<<<<<< HEAD
export default Home;
=======
export default Home
>>>>>>> 3bb190bf70e2a7d49f456fefdd8cbd5270a8df3b
