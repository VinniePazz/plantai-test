import React, { useMemo, useContext } from 'react'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import css from './Navigation.module.css'
import useMedia from '../../../hooks/useMedia'

const Navigation = () => {
  const { toggleCart } = useContext(ShoppingCartContext)
  const isDesktop = useMedia('min-width:64em')

  // useMemo used to optimize render navigation element
  // cause every change in the ShoppingCartContext trigger
  // useContext in Navigation component
  const navigation = useMemo(() => {
    const deskTopNav = (
      <nav className={css.mobileNav}>
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
    return isDesktop ? deskTopNav : mobileNav
  }, [isDesktop, toggleCart])

  return navigation
}

export default Navigation
