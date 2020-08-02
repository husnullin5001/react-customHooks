import { useState, useEffect } from 'react'

function getInitial(key, initial) {
  const item = localStorage.getItem(key)
  if (item) return JSON.parse(item)
  if (initial instanceof Function) return initial()
  return initial
}

function saveValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => getInitial(key, initial))

  useEffect(() => {
    saveValue(key, value)
  }, [value])

  return [value, setValue]
}
