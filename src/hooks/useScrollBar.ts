import { useRef, useLayoutEffect } from 'react'
import { handleScrollBar } from '../utils/handleScrollbar'

const useScrollBar = (show: boolean) => {
  const initialRender = useRef(true)

  useLayoutEffect(() => {
    if (show) {
      handleScrollBar('hide')
    } else {
      if (!initialRender.current) {
        setTimeout(() => {
          handleScrollBar('show')
        }, 500)
      }
    }
    initialRender.current = false
  }, [show])
}

export default useScrollBar
