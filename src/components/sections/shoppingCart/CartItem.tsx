import React from 'react'
import css from './CartItem.module.css'

const CartItem = React.memo((props: any) => {
  const {
    id,
    planter,
    planterColor,
    size,
    price,
    quantity,
    productTitle,
    img,
    dispatch,
  } = props
  const handleIncrease = (id: number | string) => () => {
    dispatch({ type: 'INCREASE_ITEM_QUANTITY', payload: { id } })
  }

  const handleDecrease = (id: number | string) => () => {
    dispatch({ type: 'DECREASE_ITEM_QUANTITY', payload: { id } })
  }

  const handleRemove = (id: number | string) => () => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: { id } })
  }

  return (
    <div className={css.cartItem}>
      <div>
        <img src={img} className={css.productImg} alt={productTitle} />
      </div>
      <div className={css.productInfo}>
        <h4>Marble Queen Pothos</h4>
        <p>
          {size} / {planter} / {planterColor}
        </p>
        <p>${price * quantity}</p>
        <div className={css.actions}>
          <div className={css.quantityBar}>
            <button onClick={handleDecrease(id)}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease(id)}>+</button>
          </div>
          <button onClick={handleRemove(id)} className={css.removeButton}>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
})

export default CartItem
