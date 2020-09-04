import React, { MouseEvent } from 'react'
import css from './DetailsForm.module.css'

const CustomSelect = () => {
  return (
    <div>
      <div>
        <button>custom select</button>
      </div>
    </div>
  )
}

const DetailsForm = () => {
  const handleSizeClick = (e: MouseEvent) => {
    console.log(e.target)
  }
  return (
    <form className={css.detailsForm}>
      <CustomSelect />
      <div className={css.sizeWrapper}>
        <span>size</span>
        <div className={css.sizePanel} onClick={handleSizeClick}>
          <button className={css.sizeButton} type="button">
            Small
          </button>
          <button className={css.sizeButton} type="button">
            Medium
          </button>
          <button type="button" className={css.sizeGuide}>
            Size Guide
          </button>
        </div>
      </div>
    </form>
  )
}

export default DetailsForm
