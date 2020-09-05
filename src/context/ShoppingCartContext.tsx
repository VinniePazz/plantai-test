import React, { useState, useMemo, useCallback } from 'react'
import useScrollBar from '../hooks/useScrollBar'

interface ShoppingCartContext {
  show: boolean
  toggleCart: () => void
}

export const ShoppingCartContext = React.createContext<ShoppingCartContext>({
  show: false,
  toggleCart: () => {
    console.error('uncaught Shopping Cart Provider')
  },
})
ShoppingCartContext.displayName = 'ShoppingCartContext'

export const ShoppingCartProvider = (props: { children: React.ReactNode }) => {
  console.log('ShoppingCartProvider render')
  const [show, setShow] = useState(false)
  useScrollBar(show)

  // toggleCart callback must still the same
  // cause setShow is updater function that have actual version by default
  const toggleCart = useCallback(() => {
    setShow((prev) => !prev)
  }, [])

  const value: ShoppingCartContext = useMemo(
    () => ({
      show,
      toggleCart,
    }),
    [show, toggleCart]
  )
  return (
    <ShoppingCartContext.Provider value={value}>
      {props.children}
    </ShoppingCartContext.Provider>
  )
}
