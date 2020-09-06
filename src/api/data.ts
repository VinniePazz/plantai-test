export interface Variant {
  id: number
  planter: string
  planterColor: string
  size: string
  price: number
  available: boolean
  img: string
}

export interface Product {
  title: string
  description: string
  images: { small: string[]; medium: string[] }
  variants: Variant[]
}

export const product: Product = {
  title: 'Marble Queen Pothos',
  description:
    'Give your home office an upgrade! The Pothos Marble and its quick growing vines full of variegated green and white leaves will make any space look more lush. It is a great low maintenance choice for beginners.',
  images: {
    small: [
      'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_gallery_small_all_all_04_1440x.jpg?v=1597784571',
      'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_gallery_small_all_all_02_1440x.jpg?v=1597784571',
      'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_gallery_small_all_all_03_1440x.jpg?v=1597784571',
    ],
    medium: [
      'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_gallery_medium_all_all_04_1440x.jpg?v=1597784571',
      'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_gallery_medium_all_all_02_1440x.jpg?v=1597784571',
      'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_gallery_medium_all_all_01_1440x.jpg?v=1597784571',
      'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_gallery_medium_all_all_03_1440x.jpg?v=1597784571',
    ],
  },
  variants: [
    {
      id: 1,
      planter: 'dolores',
      planterColor: 'black',
      size: 'medium',
      price: 51,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_dolores_black_1440x.jpg?v=1597784571',
    },
    {
      id: 2,
      planter: 'dolores',
      planterColor: 'blush',
      size: 'medium',
      price: 51,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_dolores_blush_1440x.jpg?v=1597784571',
    },
    {
      id: 3,
      planter: 'balboa',
      planterColor: 'black',
      size: 'medium',
      price: 51,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_balboa_black_1440x.jpg?v=1597784571',
    },
    {
      id: 4,
      planter: 'balboa',
      planterColor: 'blush',
      size: 'small',
      price: 51,
      available: false,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_balboa_blush_1440x.jpg?v=1597784571',
    },
    {
      id: 5,
      planter: 'balboa',
      planterColor: 'cream',
      size: 'medium',
      price: 51,
      available: false,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_balboa_cream_1440x.gif?v=1597784571',
    },
    {
      id: 6,
      planter: 'balboa',
      planterColor: 'mint',
      size: 'medium',
      price: 51,
      available: false,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_balboa_mint_1440x.jpg?v=1597784571',
    },
    {
      id: 7,
      planter: 'grant',
      planterColor: 'black',
      size: 'small',
      price: 33,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_variant_small_grant_black_1440x.jpg?v=1597784571',
    },
    {
      id: 8,
      planter: 'grant',
      planterColor: 'blush',
      size: 'small',
      price: 33,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_variant_small_grant_blush_1440x.jpg?v=1597784571',
    },
    {
      id: 9,
      planter: 'grant',
      planterColor: 'cream',
      size: 'small',
      price: 33,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_variant_small_grant_cream_1440x.jpg?v=1597784571',
    },
    {
      id: 10,
      planter: 'grant',
      planterColor: 'mint',
      size: 'small',
      price: 33,
      available: false,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_variant_small_grant_mint_1440x.jpg?v=1597784571',
    },
    {
      id: 11,
      planter: 'grant',
      planterColor: 'terracota',
      size: 'small',
      price: 33,
      available: false,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_pothos-marble-queen_variant_small_grant_terracotta_1440x.jpg?v=1597784571',
    },
    {
      id: 12,
      planter: 'grant',
      planterColor: 'black',
      size: 'medium',
      price: 53,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_grant_black_1440x.jpg?v=1597784571',
    },
    {
      id: 13,
      planter: 'grant',
      planterColor: 'blush',
      size: 'medium',
      price: 51,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_grant_blush_1440x.jpg?v=1597784571',
    },
    {
      id: 14,
      planter: 'grant',
      planterColor: 'cream',
      size: 'medium',
      price: 51,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_grant_cream_1440x.jpg?v=1597784571',
    },
    {
      id: 15,
      planter: 'grant',
      planterColor: 'mint',
      size: 'medium',
      price: 51,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_grant_mint_1440x.jpg?v=1597784571',
    },
    {
      id: 16,
      planter: 'grant',
      planterColor: 'terracota',
      size: 'medium',
      price: 49,
      available: true,
      img:
        'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_marble-queen-pothos_variant_medium_grant_terracotta_1440x.jpg?v=1597784571',
    },
  ],
}
