export const getStorage = (key) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}

export const setStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value)
  }
}

export const removeStorage = (key) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key)
  }
}
