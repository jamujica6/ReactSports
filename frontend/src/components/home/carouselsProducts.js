import React, { useEffect } from "react";
import "../../styles/home.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../redux/productos/productos";
import { useDispatch, useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CarouselProducts(props) {
  const allProducts = useSelector((state) => state.productosMain.products); //Estado de productos
  const dispatch = useDispatch(); //Se declara dispatch para que no rompa los huevos en el useEffect

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  //Productos mas vendidos --> 5 o menos ||
  const bestSeller = allProducts.filter((product) => product.stock < 7); //Modificar stock base de datos
  const Qatar = allProducts.filter((product) => product.type === "Qatar 2022");

  return (
    <div className="containerCarouselProducts">
      <div className="carouselProducts">
        <p style={{ textAlign: "center" }} className="tittlesCarouselProducts">
          BEST SELLER PRODUCTS
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiperProducts"
        >
          {bestSeller.map((product, index) => (
            <SwiperSlide key="index" className="carouselProductsSlide">
              <div className="imgBrandCarousel">
              <img
              className="logoBrands"
                src={
                  process.env.PUBLIC_URL + `/img/${product.brand.brand}.png`
                }
              />
                </div>
              <img
                className="imageProductsCarousel"
                src={
                  process.env.PUBLIC_URL + `/img/productImages/${product.image}`
                }
              />
              <Link
                to={`/productDetail/${product._id}/${product.brand.brand}`}
                productInfo={product}
                className="linksCarousel"
              >
                <h2 className="productNameCarousel">
                  {product.productName.toUpperCase()}
                </h2>
                <h3 className="productPriceCarousel">USD ${product.price}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <p style={{ textAlign: "center" }} className="tittleCarouselMundial">
          <span className="mundialFont">FIFA WORLD CUP</span> <span className="mundialFontQatar">QATAR </span><span className="color2022">2022</span>
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiperProducts"
        >
          {Qatar.map((product, index) => (
            <SwiperSlide key="index" className="carouselProductsSlide">
              <div className="imgBrandCarousel">
              <img
              className="logoBrand"
                src={
                  process.env.PUBLIC_URL + `/img/copaNegra.png`
                }
              />
                </div>
              <img
                className="imageProductsCarousel"
                src={
                  process.env.PUBLIC_URL + `/img/productImages/${product.image}`
                }
              />
              <Link
                to={`/productDetail/${product._id}/${product.brand.brand}`}
                productInfo={product}
                className="linksCarousel"
              >
                <h2 className="productNameCarousel">{product.productName}</h2>
                <h3 className="productPriceCarousel">USD ${product.price}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CarouselProducts;
