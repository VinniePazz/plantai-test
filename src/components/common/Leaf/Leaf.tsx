import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import css from './Leaf.module.css'

const Leaf = () => {
  const { animation } = useContext(ShoppingCartContext)
  return animation ? <div className={css.leaf} /> : null
}

export default Leaf
