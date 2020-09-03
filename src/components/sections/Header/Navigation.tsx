import React, { useState } from 'react'
import css from './Navigation.module.css'

const Navigation = () => {
  const [isDesktop, setDesktop] = useState(false)

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
        <button>Cart(0)</button>
      </div>
    </nav>
  )

  return isDesktop ? null : mobileNav
}

export default Navigation
