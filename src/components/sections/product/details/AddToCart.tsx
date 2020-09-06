import React, { useContext } from 'react'
import css from './AddToCart.module.css'
import { ShoppingCartContext } from '../../../../context/ShoppingCartContext'

const AddToCart = ({ variant, productTitle }: any) => {
  const { dispatch, setAnimation } = useContext(ShoppingCartContext)

  const handleClick = () => {
    const payload = { ...variant, productTitle }
    dispatch({ type: 'ADD_ITEM_TO_CART', payload })
    setAnimation(true)
  }

  const disabled = !variant.available

  const addToCartContent = disabled
    ? 'Sold Out'
    : `$${variant.price} - Add to Cart`

  return (
    <button disabled={disabled} className={css.addToCart} onClick={handleClick}>
      {addToCartContent}
    </button>
  )
}

export default AddToCart
