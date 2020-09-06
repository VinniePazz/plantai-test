import React, { useState, useEffect, useMemo, useCallback } from 'react'

interface CurrencyContext {
  isEuro: boolean
  toggleCurrency: () => void
  getPriceInEuro: (price: number | undefined) => number | undefined
}

export const CurrencyContext = React.createContext<CurrencyContext>({
  isEuro: false,
  getPriceInEuro: (price) => {
    return price
  },
  toggleCurrency: () => {
    throw new Error('CurrencyProvider not detected')
  },
})
CurrencyContext.displayName = 'CurrencyContext'

// =================== Provider =================== //

export const CurrencyProvider = (props: { children: React.ReactNode }) => {
  const [rate, setRate] = useState(0.83)
  const [error, setError] = useState(false)
  const [isEuro, setEuro] = useState(false)

  useEffect(() => {
    let unmounted = false
    try {
      const getCurrentUSDRate = async () => {
        const response = await fetch(
          'https://api.exchangeratesapi.io/latest?base=USD'
        )
        const { rates } = await response.json()
        if (!unmounted) {
          setRate(rates.EUR)
        }
      }
      getCurrentUSDRate()
    } catch (error) {
      setError(error)
    }

    return () => {
      // Optimize case when network request not finished
      //  but component unmounts for some reason
      unmounted = true
    }
  }, [])

  const toggleCurrency = useCallback(() => {
    setEuro((prev) => !prev)
  }, [])

  const getPriceInEuro = useCallback(
    (price) => {
      return Math.round(Number(price) * rate)
    },
    [rate]
  )

  const value: CurrencyContext = useMemo(
    () => ({
      isEuro,
      getPriceInEuro,
      toggleCurrency,
    }),
    [isEuro, getPriceInEuro, toggleCurrency]
  )

  return (
    <CurrencyContext.Provider value={value}>
      {props.children}
    </CurrencyContext.Provider>
  )
}
