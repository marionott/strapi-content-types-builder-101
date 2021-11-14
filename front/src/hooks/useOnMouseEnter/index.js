import { useCallback, useState } from 'react'

const useOnMouseEnter = () => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])
  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return [isHover, onMouseEnter, onMouseLeave]
}

export default useOnMouseEnter
