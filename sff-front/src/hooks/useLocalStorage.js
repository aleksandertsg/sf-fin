import { useState } from 'react'


const useLocalStorage = (key, defaultValue = null) => {
  const storedValue = localStorage.getItem(key)
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : defaultValue)

  return [
    value,
    value => {
      setValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    }
  ]
}

export default useLocalStorage