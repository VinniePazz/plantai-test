import React from 'react'
import { Layout } from './components/layouts'
import { Product } from './components/sections'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { CurrencyProvider } from './context/CurrencyContext'

function App() {
  return (
    <CurrencyProvider>
      <ShoppingCartProvider>
        <Layout>
          <Product />
        </Layout>
      </ShoppingCartProvider>
    </CurrencyProvider>
  )
}

export default App
