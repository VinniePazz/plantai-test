import React, { MouseEvent, SyntheticEvent, Dispatch } from 'react'
import css from './DetailsForm.module.css'
import PlanterSelect from './PlanterSelect'
import { Variant, Product } from '../../../../api/data'
import { VariantsTree } from '../../../../utils/aggregation'
import { VariantOptions } from '../../../../utils/getters'
import { ProductReducerAction } from '../productReducer'
import AddToCart from './AddToCart'

// Mock colors for color panel. In real projects it's should
// be entities in db and requested from server
interface Hex {
  [x: string]: string
}
const hex: Hex = {
  black: '#3e3832',
  blush: '#ffd2b7',
  cream: '#eee7db',
  mint: '#cee0de',
  'pale gray': '#dcd7cb',
  terracota: '#c38364',
}

interface DetailsFormProps {
  product: Product
  variant: Variant | undefined
  variantsTree: VariantsTree
  options: VariantOptions
  priceWithCurrency: string
  dispatch: Dispatch<ProductReducerAction>
}

const DetailsForm = (props: DetailsFormProps) => {
  const {
    product,
    variant,
    variantsTree,
    options,
    priceWithCurrency,
    dispatch,
  } = props
  const { planter, size } = options

  const handleSizeClick = (size: string) => (e: MouseEvent) => {
    dispatch({ type: 'SELECT_SIZE', payload: size })
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
  }

  const handleColor = (color: string) => (e: MouseEvent) => {
    e.preventDefault()
    dispatch({ type: 'SELECT_COLOR', payload: color })
  }

  const sizes = (
    <div className={css.sizeWrapper}>
      <span>size</span>
      <div className={css.sizePanel}>
        {['small', 'medium'].map((type) => {
          const disabled = variantsTree[planter][type].length === 0
          return (
            <button
              key={type}
              disabled={disabled}
              onClick={handleSizeClick(type)}
              className={css.sizeButton}
              style={{
                borderBottom:
                  type === size ? '1px solid #2d2a24' : '1px solid transparent',
                cursor: disabled ? 'not-allowed' : 'pointer',
              }}
              type="button"
            >
              {type}
            </button>
          )
        })}
      </div>
    </div>
  )

  const colors = (
    <div className={css.colorOptions}>
      <span>planter color</span>
      <div className={css.colorPanel}>
        {variantsTree[planter][size].map((color: string) => (
          <button
            key={color}
            type="button"
            className={css.colorBox}
            onClick={handleColor(color)}
          >
            <div
              className={css.color}
              style={{ backgroundColor: hex[color] }}
            ></div>
            <label
              className={css.colorLabel}
              style={{
                borderBottom:
                  color === options.color
                    ? '1px solid #2d2a24'
                    : '1px solid transparent',
              }}
            >
              {color}
            </label>
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <form className={css.detailsForm} onSubmit={handleSubmit}>
      <PlanterSelect
        variantsTree={variantsTree}
        planter={planter}
        dispatch={dispatch}
      />
      {sizes}
      {colors}
      <AddToCart
        variant={variant}
        productTitle={product.title}
        priceWithCurrency={priceWithCurrency}
      />
    </form>
  )
}

export default DetailsForm
