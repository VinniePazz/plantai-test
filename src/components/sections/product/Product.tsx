import React from 'react'
import css from './Product.module.css'
import ProductSlider from './slider/ProductSlider'
import ProductDetails from './details/ProductDetails'

const Product = () => {
  return (
    <main className={css.productSection}>
      <ProductSlider />
      <ProductDetails />
    </main>
  )
}

export default Product
