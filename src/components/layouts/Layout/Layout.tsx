import React from 'react'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return <div>{props.children}</div>
}

export default Layout
