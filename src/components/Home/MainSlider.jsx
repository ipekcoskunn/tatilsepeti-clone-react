import React from 'react'
import "./MainSlider.css"
import Carousel from 'react-bootstrap/Carousel';


const MainSlider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000} className="carousel-home">
                    <img
                        className="d-block home-slider-img"
                        src="https://cdn.tatilsepeti.com/Files/Banner/0388/765x240sn-1.jpg"
                        alt="Image1"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000} className="carousel-home">
                    <img
                        className="d-block home-slider-img"
                        src="https://cdn.tatilsepeti.com/Files/Banner/0293/Nirvana-Hotels-23.08.24.jpg"
                        alt="Image2"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000} className="carousel-home">
                    <img
                        className="d-block home-slider-img"
                        src="https://cdn.tatilsepeti.com/Files/Banner/0293/suenobelek850x2009.jpg"
                        alt="Image3"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MainSlider