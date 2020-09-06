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

interface TotalSumAndQuantity {
  quantity: number
  totalSum: number
}

export function getTotalSumAndQuantity(cart: any): TotalSumAndQuantity {
  return cart.reduce(
    (acc: TotalSumAndQuantity, item: any) => {
      return {
        quantity: acc.quantity + item.quantity,
        totalSum: acc.totalSum + item.price * item.quantity,
      }
    },
    {
      quantity: 0,
      totalSum: 0,
    }
  )
}
