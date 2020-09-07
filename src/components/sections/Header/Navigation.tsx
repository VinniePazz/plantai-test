import React, { useMemo, useContext } from 'react'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import css from './Navigation.module.css'
import useMedia from '../../../hooks/useMedia'

const Navigation = () => {
  const { toggleCart, cart } = useContext(ShoppingCartContext)
  const isDesktop = useMedia('min-width:64em')
  const itemsInCart = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const deskTopNav = (
    <nav className={css.navWrapper}>
      <div className={css.logo}>
        <button>
          <span>The</span> <span>Sill</span>
        </button>
      </div>
      <ul className={css.menu}>
        <li>Shop</li>
        <li>Best Sellers</li>
        <li>Our Summer Picks</li>
        <li>Online workshops</li>
      </ul>
      <ul className={css.userMenu}>
        <li>Search</li>
        <li>Log In</li>
        <button onClick={toggleCart}>Cart ({itemsInCart})</button>
      </ul>
    </nav>
  )

  const mobileNav = (
    <nav className={css.navWrapper}>
      <div className={css.burgerContainer}>
        <button className={css.burger}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={css.logo}>
        <button>
          <span>The</span> <span>Sill</span>
        </button>
      </div>
      <div className={css.cartLink}>
        <button onClick={toggleCart}>Cart({itemsInCart})</button>
      </div>
    </nav>
  )

  return isDesktop ? deskTopNav : mobileNav
}

export default Navigation
