import React, { useContext } from 'react'
import src from '../../../assets/balboa_medium_blush.jpg'
import css from './ShoppingCart.module.css'
import setClass from '../../../utils/setClass'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'

const items = [1, 2, 3, 4]

const ShoppingCart = () => {
  const { show, toggleCart } = useContext(ShoppingCartContext)

  const renderCartItem = (item: number) => (
    <div className={css.cartItem}>
      <div>
        <img src={src} className={css.productImg} alt="test" />
      </div>
      <div>
        <a>Marble Queen Pothos</a>
        <p>Medium / Dolores / Black</p>
        <p>$51</p>
        <div className={css.actions}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )

  const cartContent = (
    <div className={css.cartContent}>
      <h3>Cart (1) </h3>
      <button>Continue shopping</button>
      <div className={css.cartItems}>{items.map(renderCartItem)}</div>
    </div>
  )

  const cartSummary = (
    <div className={css.cartSummary}>
      <div>
        <h4>Subtotal</h4>
        <p>$51</p>
      </div>
      <p>Shipping and taxes calculated at checkout.</p>
      <button>Shopping Cart</button>
    </div>
  )

  const emptyCart = (
    <div className={css.emptyCart}>
      <h3>Shopping cart</h3>
      <p>You shopping cart is currently empty</p>
      <button>Continue Shopping</button>
    </div>
  )

  const closeButton = (
    <button className={css.closeButton} onClick={toggleCart}>
      <span>&#x2715;</span>
    </button>
  )

  const shoppingCartClassName = setClass({
    [css.shoppingCart]: true,
    [css.hiddenShoppingCart]: !show,
  })

  return (
    <aside className={shoppingCartClassName}>
      {cartContent}
      {cartSummary}
      {closeButton}
    </aside>
  )
}

export default ShoppingCart
