import Cookies from 'js-cookie'

// cookie
export const setCookie = (name, value) => {
  return Cookies.set(name, value)
}

export const getCookie = (name) => {
  return Cookies.get(name)
}

export const removeCookie = () => {
  return Cookies.remove(name)
}

// localStorage
export const setLocalStorage = (name, value) => {
  return window.localStorage.setItem(name, value)
}

export const getLocalStorage = (name) => {
  return window.localStorage.getItem(name)
}

export const rmLocalStorage = (name) => {
  return window.localStorage.removeItem(name)
}
