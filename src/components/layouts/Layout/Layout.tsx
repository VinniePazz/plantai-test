import React from 'react'
import { Header, ShoppingCart } from '../../sections'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      <ShoppingCart />
      {props.children}
    </div>
  )
}

export default Layout
