import React from 'react'
import { Header } from '../../sections'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
