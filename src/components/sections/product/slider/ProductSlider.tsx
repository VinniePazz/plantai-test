import React from 'react'
import Slider from 'react-slick'
import src from '../../../../assets/balboa_medium_black.jpg'
import css from './ProductSlider.module.css'
import './custom-slick-dots.css'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: `slick-dots`,
}

const ProductSlider = () => {
  return (
    <Slider {...sliderSettings}>
      <img src={src} className={css.slide} alt="test" />
      <img src={src} className={css.slide} alt="test" />
      <img src={src} className={css.slide} alt="test" />
      <img src={src} className={css.slide} alt="test" />
    </Slider>
  )
}

export default ProductSlider
