import { Variant } from '../api/data'

export interface VariantOptions {
  planter: string
  color: string
  size: string
}

export function getVariantByOptions(
  variants: Variant[],
  options: VariantOptions
): Variant | undefined {
  const { planter, color, size } = options
  return variants.find((variant) => {
    return (
      variant.planter === planter &&
      variant.planterColor === color &&
      variant.size === size
    )
  })
}
