import React from 'react'
import HomeBanner from '../Components/homeBanner/homeBanner'
import banner from '../../src/assets/sideBanner.jpg'
import { Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
// swiper for product navigation slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';

function Home() {
  return (
    <>
{/*       carosoul banner */}
    <HomeBanner/>
{/*product listing section starts here  */}
    <section className='homeProducts'>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
{/*             for side banner */}
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
              </div>
              <Button className="viewAllBtn ml-auto">view All <BsArrowRight /></Button>
            </div>
            <div className="product_row w-100 mt-4 ">
{/*             here used swiper for product items */}
              <Swiper
        slidesPerView={4}
        spaceBetween={30}
        Pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="productItem">
            <div className="imgwrapper">
              <img src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className='w-100' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="productItem">
            <div className="imgwrapper">
              <img src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className='w-100' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="productItem">
            <div className="imgwrapper">
              <img src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className='w-100' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="productItem">
            <div className="imgwrapper">
              <img src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className='w-100' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="productItem">
            <div className="imgwrapper">
              <img src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className='w-100' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="productItem">
            <div className="imgwrapper">
              <img src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className='w-100' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="productItem">
            <div className="imgwrapper">
              <img src="	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" alt="" className='w-100' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
