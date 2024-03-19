import { useEffect, useRef, useState } from "react"

const useDebounce = <T>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  const timerId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current)
    }

    timerId.current = setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current)
      }
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
