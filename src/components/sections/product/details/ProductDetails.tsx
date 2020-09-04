import React from 'react'
import css from './ProductDetails.module.css'
import DetailsForm from './DetailsForm'

const ProductDetails = () => {
  return (
    <div className={css.productDetails}>
      <div className={css.detailsHeader}>
        <h1 className={css.title}>Marble Queen Pothos</h1>
        <div className={css.price}>$51</div>
      </div>
      <p>
        Give your home office an upgrade! The Pothos Marble and its quick
        growing vines full of variegated green and white leaves will make any
        space look more lush. It is a great low maintenance choice for
        beginners.
      </p>
      <div>
        <span className={css.label}>Note</span>
        <p>Arrives in a nursery grow pot nestled inside our ceramic planter.</p>
      </div>
      <DetailsForm />
    </div>
  )
}

export default ProductDetails
