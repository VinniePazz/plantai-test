import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
} from 'react'
import useScrollBar from '../hooks/useScrollBar'
import { Variant } from '../api/data'

interface CartItem extends Variant {
  quantity: number
}

// =================== CONTEXT =================== //
interface ShoppingCartContext {
  cart: CartItem[]
  show: boolean
  animation: boolean
  toggleCart: () => void
  dispatch: React.Dispatch<CartActions>
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShoppingCartContext = React.createContext<ShoppingCartContext>({
  cart: [],
  show: false,
  animation: false,
  toggleCart: () => {
    console.error('uncaught Shopping Cart Provider')
  },
  setAnimation: () => {
    console.error('uncaught Shopping Cart Provider')
  },
  dispatch: () => {
    console.error('uncaught Shopping Cart Provider')
  },
})
ShoppingCartContext.displayName = 'ShoppingCartContext'

// =================== REDUCER =================== //

interface CartProduct extends Variant {
  quantity: number
}

type CartActions =
  | { type: 'ADD_ITEM_TO_CART'; payload: any }
  | { type: 'REMOVE_ITEM_FROM_CART'; payload: any }
  | { type: 'INCREASE_ITEM_QUANTITY'; payload: any }
  | { type: 'DECREASE_ITEM_QUANTITY'; payload: any }

const initCartReducer = () => {
  let cart: CartProduct[]

  const cartFromStorage = localStorage.getItem('cart')

  if (typeof cartFromStorage === 'string') {
    cart = JSON.parse(cartFromStorage)
  } else {
    cart = []
  }

  return cart
}

function cartReducer(state: CartProduct[], action: CartActions): CartProduct[] {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      const existedItem = state.find((item) => item.id === action.payload.id)

      if (existedItem) {
        const updatedCart = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
        return updatedCart
      } else {
        const newItem = { ...action.payload, quantity: 1 }
        return [...state, newItem]
      }
    }
    case 'REMOVE_ITEM_FROM_CART': {
      const updatedCart = state.filter((item) => {
        if (item.id === action.payload.id) {
          return false
        } else {
          return true
        }
      })
      return updatedCart
    }
    case 'INCREASE_ITEM_QUANTITY': {
      const updatedCart = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      return updatedCart
    }
    case 'DECREASE_ITEM_QUANTITY': {
      const item = state.find((item) => item.id === action.payload.id)

      if (item) {
        if (item.quantity > 1) {
          const updatedCart = state.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
          return updatedCart
        } else {
          const updatedCart = state.filter((item) => {
            if (item.id === action.payload.id) {
              return false
            } else {
              return true
            }
          })
          return updatedCart
        }
      } else {
        return state
      }
    }
    default:
      throw new Error()
  }
}

// =================== Provider =================== //

export const ShoppingCartProvider = (props: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], initCartReducer)
  const [show, setShow] = useState(false)
  const [animation, setAnimation] = useState(false)
  useScrollBar(show, 500)

  useEffect(() => {
    // synchronize cart with localeStorage
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // leaf animation on Add to Cart action
  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(false)
        setShow(true)
      }, 400)
    }
  }, [animation])

  // toggleCart callback must still the same
  // cause setShow is updater function that have actual version by default
  const toggleCart = useCallback(() => {
    setShow((prev) => !prev)
  }, [])

  const value: ShoppingCartContext = useMemo(
    () => ({
      show,
      animation,
      toggleCart,
      setAnimation,
      dispatch,
      cart,
    }),
    [animation, cart, show, toggleCart]
  )
  return (
    <ShoppingCartContext.Provider value={value}>
      {props.children}
    </ShoppingCartContext.Provider>
  )
}
