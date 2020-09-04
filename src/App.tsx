import React from 'react'
import { Layout } from './components/layouts'
import { Product } from './components/sections'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Product />
      </Layout>
    </ShoppingCartProvider>
  )
}

export default App
