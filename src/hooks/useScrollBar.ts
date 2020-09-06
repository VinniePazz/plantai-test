import { useRef, useLayoutEffect } from 'react'
import { handleScrollBar } from '../utils/handleScrollbar'

// Hide browser scrollbar for body when some Dialog appeared, etc.
// Second parameter set delay before showing browser scrollbar again
const useScrollBar = (hide: boolean, timeOut = 0) => {
  const initialRender = useRef(true)

  useLayoutEffect(() => {
    if (hide) {
      handleScrollBar('hide')
    } else {
      if (!initialRender.current) {
        setTimeout(() => {
          handleScrollBar('show')
        }, timeOut)
      }
    }
    initialRender.current = false
  }, [hide, timeOut])
}

export default useScrollBar
