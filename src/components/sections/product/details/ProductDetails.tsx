import React, { Dispatch } from 'react'
import css from './ProductDetails.module.css'
import DetailsForm from './DetailsForm'
import { Variant, Product } from '../../../../api/data'
import { VariantsTree } from '../../../../utils/aggregation'
import { VariantOptions } from '../../../../utils/getters'
import { ProductReducerAction } from '../productReducer'

interface ProductDetailsProps {
  product: Product
  variant: Variant | undefined
  variantsTree: VariantsTree
  options: VariantOptions
  dispatch: Dispatch<ProductReducerAction>
}

const ProductDetails = (props: ProductDetailsProps) => {
  const { product, variant } = props

  return (
    <div className={css.productDetails}>
      <div className={css.detailsHeader}>
        <h1 className={css.title}>{product.title}</h1>
        <div className={css.price}>${variant?.price}</div>
      </div>
      <p>{product.description}</p>
      <div>
        <span className={css.label}>Note</span>
        <p>Arrives in a nursery grow pot nestled inside our ceramic planter.</p>
      </div>
      <DetailsForm {...props} />
    </div>
  )
}

export default ProductDetails
