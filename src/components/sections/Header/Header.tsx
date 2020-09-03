import React from 'react'
import Banner from './Banner'
import Navigation from './Navigation'
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <Banner />
      <Navigation />
    </header>
  )
}

export default Header
