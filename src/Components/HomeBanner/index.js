import React from "react";
import Slider from "react-slick";



const HomeBaner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };

    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Women_Western_Wear_main_banner_web_2537a4f27d/Women_Western_Wear_main_banner_web_2537a4f27d.png" className="w-100"/>
                </div>

                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/MAC_Web_11_Oct24_34605c7536/MAC_Web_11_Oct24_34605c7536.jpg" className="w-100"/>
                </div>

                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/adidas_puma_main_banner_web_2c3a527fa9/adidas_puma_main_banner_web_2c3a527fa9.gif" className="w-100"/>
                </div>

                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/main_banner_web_78707b04e1/main_banner_web_78707b04e1.png" className="w-100"/>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBaner;