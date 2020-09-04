import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import css from './Overlay.module.css'

const Overlay = () => {
  const { show, toggleCart } = useContext(ShoppingCartContext)
  return show ? <div className={css.overlay} onClick={toggleCart} /> : null
}

export default Overlay
