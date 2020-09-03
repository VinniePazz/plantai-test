import React from 'react'
import css from './Product.module.css'
import ProductSlider from './slider/ProductSlider'

const Product = () => {
  return (
    <main className={css.productContainer}>
      <ProductSlider />
      <div className={css.details}>Product details</div>
    </main>
  )
}

export default Product
