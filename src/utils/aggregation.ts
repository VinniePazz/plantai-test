import { Variant } from '../api/data'

interface Sizes {
  [key: string]: string[]
}

export interface VariantsTree {
  [key: string]: Sizes
}

export function aggregateProductVariants(variants: Variant[]): VariantsTree {
  const variantsTree: VariantsTree = {}

  function pushToHash(variant: Variant) {
    const { planter, planterColor, size } = variant
    if (planter in variantsTree) {
      size === 'small'
        ? variantsTree[planter].small.push(planterColor)
        : variantsTree[planter].medium.push(planterColor)
    } else {
      const newPlanter: Sizes = {
        small: [],
        medium: [],
      }
      size === 'small'
        ? newPlanter.small.push(planterColor)
        : newPlanter.medium.push(planterColor)

      variantsTree[planter] = newPlanter
    }
  }

  variants.forEach(pushToHash)

  // Sort all colors by alphabet: black, blush, pale gray etc
  Object.keys(variantsTree).forEach((planter) => {
    variantsTree[planter].small.sort()
    variantsTree[planter].medium.sort()
  })

  return variantsTree
}
