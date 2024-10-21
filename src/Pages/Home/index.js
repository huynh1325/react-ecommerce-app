
import { Button } from "@mui/material";
import HomeBaner from "../../Components/HomeBanner";
import banner from '../../assets/images/banner.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem/ProductItem";

const Home = ()=> {


    
    return(
        <>
            <HomeBaner/>     
     
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={banner} className="cursor"/>
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-item-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All 
                                    <IoIosArrowRoundForward/></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper">

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>
                                
                                </Swiper>
                            </div>



                            <div className="d-flex align-item-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All 
                                    <IoIosArrowRoundForward/></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper">

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>                                    
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>                                    
                                        <ProductItem/>
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
export default Home;