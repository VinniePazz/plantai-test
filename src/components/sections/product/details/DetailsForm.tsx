import React, { MouseEvent, SyntheticEvent } from 'react'
import css from './DetailsForm.module.css'

const CustomSelect = () => {
  return (
    <div>
      <select>
        <option value="balboa">Balboa</option>
        <option value="dolores">Dolores</option>
        <option selected value="grant">
          Grant
        </option>
        <option value="hide">Hide</option>
        <option value="prospect">Prospect</option>
      </select>
    </div>
  )
}

const DetailsForm = () => {
  const handleSizeClick = (type: 'small' | 'medium') => (e: MouseEvent) => {
    console.log(type)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
  }

  const sizeOptions = (
    <div className={css.sizeWrapper}>
      <span>size</span>
      <div className={css.sizePanel}>
        <button
          onClick={handleSizeClick('small')}
          className={`${css.sizeButton} ${css.selected}`}
          type="button"
        >
          Small
        </button>
        <button
          onClick={handleSizeClick('medium')}
          className={`${css.sizeButton} ${css.disabled}`}
          type="button"
        >
          Medium
        </button>
        <button type="button" className={css.sizeGuide}>
          Size Guide
        </button>
      </div>
    </div>
  )

  const colorOptions = (
    <div className={css.colorOptions}>
      <span>planter color</span>
      <ul className={css.colorPanel}>
        <li className={css.colorBox}>
          <div className={css.color}></div>
          <label className={css.colorLabel}>Black</label>
        </li>
        <li className={css.colorBox}>
          <div className={css.color}></div>
          <label className={css.colorLabel}>Black</label>
        </li>
        <li className={css.colorBox}>
          <div className={css.color}></div>
          <label className={`${css.colorLabel} ${css.selected}`}>
            Pale Gray
          </label>
        </li>
      </ul>
    </div>
  )

  const addToCart = <button className={css.addToCart}>$51 - Add to Cart</button>

  return (
    <form className={css.detailsForm} onSubmit={handleSubmit}>
      <CustomSelect />
      {sizeOptions}
      {colorOptions}
      {addToCart}
    </form>
  )
}

export default DetailsForm
