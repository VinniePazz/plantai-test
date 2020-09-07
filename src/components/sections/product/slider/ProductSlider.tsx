import React from 'react'
import Slider from 'react-slick'
import css from './ProductSlider.module.css'
import './custom-slick-dots.css'
import { Variant, Product } from '../../../../api/data'

const CustomArrow = ({ type, onClick }: any) => {
  return (
    <button
      className={`${css.arrow} ${
        type === 'left-arrow' ? css.arrowLeft : css.arrowRight
      }`}
      onClick={onClick}
    />
  )
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dotsClass: `slick-dots`,
  prevArrow: <CustomArrow type="left-arrow" />,
  nextArrow: <CustomArrow type="right-arrow" />,
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
