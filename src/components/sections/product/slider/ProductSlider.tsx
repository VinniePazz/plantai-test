import React from 'react'
import Slider from 'react-slick'
import css from './ProductSlider.module.css'
import './custom-slick-dots.css'
import { Variant, Product } from '../../../../api/data'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: `slick-dots`,
}

interface ProductSliderProps {
  variant: Variant | undefined
  product: Product
}

const ProductSlider = (props: ProductSliderProps) => {
  return (
    <div className={css.sliderContainer}>
      <Slider {...sliderSettings}>
        <img src={props.variant?.img} className={css.slide} alt="test" />
        <img src={props.variant?.img} className={css.slide} alt="test" />
        <img src={props.variant?.img} className={css.slide} alt="test" />
        <img src={props.variant?.img} className={css.slide} alt="test" />
      </Slider>
    </div>
  )
}

export default ProductSlider
