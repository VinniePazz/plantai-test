import { useState, useLayoutEffect } from 'react'

/** Allow to conditionally render element via MatchMedia Native API
 * @param {String} employee - media condition.
 * @returns {boolean} flag
 * @example
 *  const isMatch = useMedia('min-width:64em')
 */
const useMedia = (media: string) => {
  const mediaQueryString = `(${media})`
  const mediaQueryList = window.matchMedia(mediaQueryString)
  const [isMatch, setShow] = useState(mediaQueryList.matches)

  useLayoutEffect(() => {
    const handleShow = (mql: MediaQueryListEvent) => {
      setShow(mql.matches)
    }
    mediaQueryList.addListener(handleShow)

    return () => mediaQueryList.removeListener(handleShow)
  }, [mediaQueryList])

  return isMatch
}

export default useMedia
