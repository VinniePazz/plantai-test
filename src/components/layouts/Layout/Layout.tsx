import React from 'react'
import { Header, ShoppingCart } from '../../sections'
import css from './Layout.module.css'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      <ShoppingCart />
      <div className={css.mainContainer}>{props.children}</div>
    </div>
  )
}

export default Layout
