import { MouseEventHandler, useCallback, useState } from 'react'

interface UseOnMouseEnterReturn {
  isHover: boolean
  onMouseEnter: MouseEventHandler
  onMouseLeave: MouseEventHandler
}

const useOnMouseEnter = (): UseOnMouseEnterReturn => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])
  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return { isHover, onMouseEnter, onMouseLeave }
}

export default useOnMouseEnter
