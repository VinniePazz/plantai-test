import React from 'react'
import Banner from './Banner'
import Navigation from './Navigation'

import setClass from '../../../utils/setClass'
import css from './Header.module.css'
import useHeaderScroll from '../../../hooks/useHeaderScroll'

const Header = () => {
  const { visibility, transparency } = useHeaderScroll()

  const className = setClass({
    [css.header]: true,
    [css.hiddenHeader]: visibility === 'hidden',
    [css.transparentHeader]: transparency,
  })

  return (
    <header className={className} id="header">
      <div className={css.headerContainer}>
        <Banner />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
