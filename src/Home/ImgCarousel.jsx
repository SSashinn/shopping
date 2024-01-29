import { useEffect, useState } from "react"
import propTypes from 'prop-types'

const ImgCarousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex+1) % images.length);
    }

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex -1 +images.length)%images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 2500);
        return () => clearInterval(timer);
  
    })

    return (
        <div className="carousel-container">
            <button onClick={prevSlide} className="prev">&lt;</button>
            <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="image-carousel fade"/>
            <button onClick={nextSlide} className="next">&gt;</button> 
        </div>
    )
}

export default ImgCarousel;

ImgCarousel.propTypes = {
    images: propTypes.array,
}