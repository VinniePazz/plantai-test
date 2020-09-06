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
  variants: Variant[]
}

export const product: Product = {
  title: 'Marble Queen Pothos',
  description:
    'Give your home office an upgrade! The Pothos Marble and its quick growing vines full of variegated green and white leaves will make any space look more lush. It is a great low maintenance choice for beginners.',
  variants: [
    {
      id: 1,
      planter: 'dolores',
      planterColor: 'black',
      size: 'medium',
      price: 51,
      available: true,
      img: require('../assets/dolores_medium_black.jpg'),
    },
    {
      id: 2,
      planter: 'balboa',
      planterColor: 'black',
      size: 'medium',
      price: 57,
      available: true,
      img: require('../assets/balboa_medium_black.jpg'),
    },
    {
      id: 3,
      planter: 'balboa',
      planterColor: 'black',
      size: 'small',
      price: 37,
      available: false,
      img: require('../assets/balboa_medium_black.jpg'),
    },
    {
      id: 4,
      planter: 'balboa',
      planterColor: 'blush',
      size: 'medium',
      price: 44,
      available: true,
      img: require('../assets/balboa_medium_blush.jpg'),
    },
    {
      id: 5,
      planter: 'balboa',
      planterColor: 'cream',
      size: 'medium',
      price: 58,
      available: true,
      img: require('../assets/balboa_medium_cream.gif'),
    },
    {
      id: 6,
      planter: 'balboa',
      planterColor: 'mint',
      size: 'medium',
      price: 46,
      available: true,
      img: require('../assets/balboa_medium_mint.jpg'),
    },
  ],
}
