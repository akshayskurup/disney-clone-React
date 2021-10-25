import React from 'react'
import '../Movies/Movies.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movies() {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 5,
        autoplay: true
};
    return (
        <Slider className='Slider-two' {...settings}>
            <div className='poster'>
                <img className='poster-images' src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" /> 
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" /> 
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" /> 
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" /> 
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" /> 
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" /> 
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" /> 
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" />
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-simpsons-poster.jpg?itok=g53MiMST" alt="" />
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-simpsons-poster.jpg?itok=g53MiMST" alt="" />
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-simpsons-poster.jpg?itok=g53MiMST" alt="" />
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-simpsons-poster.jpg?itok=g53MiMST" alt="" />
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-simpsons-poster.jpg?itok=g53MiMST" alt="" />
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-simpsons-poster.jpg?itok=g53MiMST" alt="" />
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-simpsons-poster.jpg?itok=g53MiMST" alt="" />
            </div>
            <div className='poster'>
                <img className='poster-images' src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-simpsons-poster.jpg?itok=g53MiMST" alt="" />
            </div>

        </Slider>
    )
}

export default Movies
