import React from 'react'
import '../Slider/ImgSlider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
};
    return (
        <Slider className='Slider' {...settings}>
            <div>
                <img className='image' src="\Disney Plus\images\slider-badging.jpg" alt="" />
            </div>
            <div>
                <img className='image' src="\Disney Plus\images\slider-badag.jpg" alt="" />
            </div>
            <div>
                <img className='image' src="\Disney Plus\images\slider-scale.jpg" alt="" />
            </div>
            <div>
                <img className='image' src="\Disney Plus\images\slider-scales.jpg" alt="" />
            </div>
        </Slider>
    )
}

export default ImgSlider
