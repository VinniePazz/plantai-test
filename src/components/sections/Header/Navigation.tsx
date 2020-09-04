import React, { useState, useMemo, useContext } from 'react'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import css from './Navigation.module.css'

const Navigation = () => {
  const { toggleCart } = useContext(ShoppingCartContext)
  const [isDesktop, setDesktop] = useState(false)

  const element = useMemo(() => {
    const mobileNav = (
      <nav className={css.mobileNav}>
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
          <button onClick={toggleCart}>Cart(0)</button>
        </div>
      </nav>
    )
    // The rest of your rendering logic
    return isDesktop ? null : mobileNav
  }, [isDesktop, toggleCart])

  return element
}

export default Navigation
