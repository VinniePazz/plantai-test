import React from 'react'
import { Header, ShoppingCart } from '../../sections'
import css from './Layout.module.css'
import { Overlay, Leaf } from '../../common'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      <ShoppingCart />
      <div className={css.mainContainer}>{props.children}</div>
      <Overlay />
      <Leaf />
    </div>
  )
}

export default Layout
