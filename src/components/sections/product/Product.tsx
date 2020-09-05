import React, { useReducer } from 'react'
import css from './Product.module.css'
import ProductSlider from './slider/ProductSlider'
import ProductDetails from './details/ProductDetails'
import { productReducer, initialState } from './productReducer'
import { getVariantByOptions } from '../../../utils/getters'

const Product = () => {
  const [state, dispatch] = useReducer(productReducer, initialState)
  const { options, variantsTree, product } = state
  // Every time when selected options changes -> get the new
  // corresponding variant from product
  const variant = getVariantByOptions(product.variants, options)

  return (
    <main className={css.productSection}>
      <ProductSlider variant={variant} product={product} />
      <ProductDetails
        options={options}
        dispatch={dispatch}
        product={product}
        variant={variant}
        variantsTree={variantsTree}
      />
    </main>
  )
}

export default Product
