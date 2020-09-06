import { useState, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'

type Visibility = 'hidden' | 'showed'
type HeaderScrollState = {
  visibility: Visibility
  transparency: boolean
}

const useHeaderScroll = (): HeaderScrollState => {
  // TODO: make optimizations and properly type annotations

  const scrollPositionY = useRef<number>(0)
  const [visibility, setVisibility] = useState<Visibility>('showed')
  const [transparency, setTransparency] = useState<boolean>(false)

  useEffect(() => {
    let initialScrollEvent = true

    const handleScroll = (e: Event) => {
      e.stopPropagation()

      if (initialScrollEvent) {
        initialScrollEvent = false
        scrollPositionY.current = window.pageYOffset
      } else {
        if (
          window.pageYOffset > 80 &&
          scrollPositionY.current < window.pageYOffset
        ) {
          setVisibility('hidden')
        }
        if (scrollPositionY.current > window.pageYOffset) {
          setVisibility('showed')
        }
        // Scroll position actualization
        scrollPositionY.current = window.pageYOffset

        // Change transparency of the header. Works only for mobile and tablets according to media queries
        setTransparency(window.pageYOffset > 300 ? false : true)
      }
    }

    // Throttle scroll handler
    const throttledHandleScroll = throttle(handleScroll, 200)

    window.addEventListener('scroll', throttledHandleScroll, true)

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll, true)
    }
  }, [visibility])

  return { visibility, transparency }
}

export default useHeaderScroll
