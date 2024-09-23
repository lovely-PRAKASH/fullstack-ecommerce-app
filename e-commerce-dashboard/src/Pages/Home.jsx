import React, { useEffect, useState } from "react";
import HomeBanner from "../Components/homeBanner/homeBanner";
import banner from "../../src/assets/sideBanner.jpg";
import banner2 from "../../src/assets/Banner2.jpg";
import { Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../Components/productCard/ProductCard";
import "swiper/css/navigation";
import "swiper/css";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchParms, setSearchParms]=useSearchParams()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/products?"+ searchParms
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchParms]);
  return (
    <>
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner mb-2">
                <img src={banner} alt="side banner" className="cursor" />
              </div>
              <div className="banner mt-4 mb-3">
                <img src={banner2} alt="side banner" className="cursor" />
              </div>
              <div className="banner">
                <img src={banner} alt="side banner" className="cursor" />
              </div>
              <div className="banner mt-4">
                <img src={banner2} alt="side banner" className="cursor" />
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
                    {products.map((product) => (
                  <SwiperSlide>
                      <ProductCard product={product} />
                  </SwiperSlide>
                    ))}
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
              <div className="product_row productRow2 d-flex w-100 mt-4 ">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
                {/* pc */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
