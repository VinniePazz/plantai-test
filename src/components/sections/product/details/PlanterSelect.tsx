import React, { Dispatch } from 'react'
import css from './PlanterSelect.module.css'
import { ProductReducerAction } from '../productReducer'
import { VariantsTree } from '../../../../utils/aggregation'

interface PlanterSelectProps {
  variantsTree: VariantsTree
  planter: string
  dispatch: Dispatch<ProductReducerAction>
}

const PlanterSelect = (props: PlanterSelectProps) => {
  const { planter, variantsTree, dispatch } = props
  const options = Object.keys(variantsTree)

  const handleChange = (e: any) => {
    dispatch({ type: 'SELECT_PLANTER', payload: e.target.value })
  }

  return (
    <div>
      <span>planter style</span>
      <select className={css.select} value={planter} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PlanterSelect
