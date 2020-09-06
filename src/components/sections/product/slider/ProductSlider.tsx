import React from 'react'
import Slider from 'react-slick'
import css from './ProductSlider.module.css'
import './custom-slick-dots.css'
import { Variant, Product, product } from '../../../../api/data'

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
  const { product, variant } = props
  const productImages =
    variant?.size === 'small' ? product.images.small : product.images.medium
  const slides = [props.variant?.img, ...productImages]
  console.log(slides)
  return (
    <div className={css.sliderContainer}>
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <img
            key={slide}
            src={slide}
            className={css.slide}
            alt={props.product.title}
          />
        ))}
      </Slider>
    </div>
  )
}

export default ProductSlider
