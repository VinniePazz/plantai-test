import { Variant } from '../api/data'

interface Sizes {
  [key: string]: string[]
}

export interface VariantsTree {
  // First level key in Variant Tree is a planter style: "DOLORES" | "BALBOA" etc
  // Second level key: Sizes (small and medium). Sizes are arrays with planter colors
  // For example:
  //                          --small: ['black', 'cream', 'pale gray']
  //               -- balboa  --medium: ['black', 'mint']
  // VariantsTree-
  //               -- dolores --small: ['mint']
  //                          --medium: ['black', 'pale gray']
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
