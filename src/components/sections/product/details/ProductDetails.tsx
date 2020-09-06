import React, { useContext, Dispatch } from 'react'
import css from './ProductDetails.module.css'
import DetailsForm from './DetailsForm'
import { Variant, Product } from '../../../../api/data'
import { VariantsTree } from '../../../../utils/aggregation'
import { VariantOptions } from '../../../../utils/getters'
import { ProductReducerAction } from '../productReducer'
import { CurrencyContext } from '../../../../context/CurrencyContext'

interface ProductDetailsProps {
  product: Product
  variant: Variant | undefined
  variantsTree: VariantsTree
  options: VariantOptions
  dispatch: Dispatch<ProductReducerAction>
}

const ProductDetails = (props: ProductDetailsProps) => {
  const { isEuro, getPriceInEuro, toggleCurrency } = useContext(CurrencyContext)
  const { product, variant } = props
  const priceWithCurrency = isEuro
    ? `\u20AC${getPriceInEuro(variant?.price)}`
    : `$${variant?.price}`

  return (
    <div className={css.productDetails}>
      <div className={css.detailsHeader}>
        <h1 className={css.title}>{product.title}</h1>
        <div className={css.price} onClick={toggleCurrency}>
          {priceWithCurrency}
        </div>
      </div>
      <p>{product.description}</p>
      <div>
        <span className={css.label}>Note</span>
        <p>Arrives in a nursery grow pot nestled inside our ceramic planter.</p>
      </div>
      <DetailsForm priceWithCurrency={priceWithCurrency} {...props} />
    </div>
  )
}

export default ProductDetails
