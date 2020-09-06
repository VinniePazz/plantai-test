import React from 'react'
import { Layout } from './components/layouts'
import { Product } from './components/sections'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { CurrencyProvider } from './context/CurrencyContext'
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <CurrencyProvider>
        <ShoppingCartProvider>
          <Layout>
            <Product />
          </Layout>
        </ShoppingCartProvider>
      </CurrencyProvider>
    </ErrorBoundary>
  )
}

export default App
