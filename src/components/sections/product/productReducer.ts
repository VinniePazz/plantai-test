import {
  aggregateProductVariants,
  VariantsTree,
} from '../../../utils/aggregation'
import { product, Product } from '../../../api/data'
import { VariantOptions } from '../../../utils/getters'

export type ProductReducerAction =
  | { type: 'SELECT_PLANTER'; payload: string }
  | { type: 'SELECT_SIZE'; payload: string }
  | { type: 'SELECT_COLOR'; payload: string }

type State = {
  product: Product
  variantsTree: VariantsTree
  options: VariantOptions
}

export const initialState = {
  product,
  variantsTree: aggregateProductVariants(product.variants),
  options: {
    planter: product.variants[0].planter,
    color: product.variants[0].planterColor,
    size: product.variants[0].size,
  },
}

export function productReducer(
  state: typeof initialState,
  action: ProductReducerAction
) {
  const { type, payload } = action
  switch (type) {
    case 'SELECT_PLANTER': {
      // SELECT_PLANTER OPTIONS:
      // 1. If variants with selected planter have the same color in same size -> change planter option;
      // 2. If variants with selected planter doesn`t have same color in this size, but have another ->
      // choose another color in this size;
      // 3. If variants with selected planter and current size doesn`t have any color (by some reason) ->
      // choose another size with this planter and available color
      // 4. If not case above: throw Error
      const colorsBySize = state.variantsTree[payload][state.options.size]
      if (colorsBySize.includes(state.options.color)) {
        // 1
        return { ...state, options: { ...state.options, planter: payload } }
      }
      if (
        colorsBySize.length > 0 &&
        !colorsBySize.includes(state.options.color)
      ) {
        // 2
        return {
          ...state,
          options: {
            ...state.options,
            planter: payload,
            color: colorsBySize[0],
          },
        }
      }
      if (colorsBySize.length === 0) {
        // 3
        const oppositeSize = state.options.size === 'small' ? 'medium' : 'small'
        return {
          ...state,
          options: {
            ...state.options,
            planter: payload,
            size: oppositeSize,
            color: state.variantsTree[payload][oppositeSize][0],
          },
        }
      }
      // 4
      throw new Error('UNHANDLED SELECT_PLANTER DISPATCH CASE')
    }

    case 'SELECT_SIZE': {
      // SELECT_SIZE OPTIONS:
      // 1. If variants with selected size have the same color -> change size option;
      // 2. If variants with selected size have any color
      // but not currently selected -> choose new color and change size option;
      // 3. If not case above: when selected size do'esnt have any color at all ->
      // dont change anything. The size button will be disabled
      const colorsBySize = state.variantsTree[state.options.planter][payload]
      if (colorsBySize.includes(state.options.color)) {
        // 1
        return { ...state, options: { ...state.options, size: payload } }
      }
      if (colorsBySize.length > 0) {
        // 2
        return {
          ...state,
          options: {
            ...state.options,
            size: payload,
            color: colorsBySize[0],
          },
        }
      }
      // 3
      return state
    }

    case 'SELECT_COLOR':
      return { ...state, options: { ...state.options, color: payload } }
    default:
      throw new Error('UNHANDLED REDUCER CASE')
  }
}
