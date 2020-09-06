import React, { useContext } from 'react'
import css from './ShoppingCart.module.css'
import setClass from '../../../utils/setClass'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import CartItem from './CartItem'
import { getTotalSumAndQuantity } from '../../../utils/getters'

const ShoppingCart = () => {
  const { show, cart, dispatch, toggleCart } = useContext(ShoppingCartContext)
  const { totalSum, quantity } = getTotalSumAndQuantity(cart)

  const cartContent = (
    <>
      <div className={css.cartContent}>
        <h3 className={css.cartContentTitle}>Cart ({quantity}) </h3>
        <div className={css.cartItems}>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} dispatch={dispatch} />
          ))}
        </div>
      </div>
      <div className={css.cartSummary}>
        <h4>Subtotal</h4>
        <p>${totalSum}</p>
      </div>
    </>
  )

  const emptyCart = (
    <div className={css.emptyCart}>
      <h3>Shopping cart</h3>
      <p>Yout shopping cart is currently empty</p>
      <button onClick={toggleCart}>Continue Shopping</button>
    </div>
  )

  const shoppingCartClassName = setClass({
    [css.shoppingCart]: true,
    [css.hiddenShoppingCart]: !show,
  })

  return (
    <aside className={shoppingCartClassName}>
      {cart.length ? cartContent : emptyCart}
      <button className={css.closeButton} onClick={toggleCart}>
        <span>&#x2715;</span>
      </button>
    </aside>
  )
}

export default ShoppingCart
