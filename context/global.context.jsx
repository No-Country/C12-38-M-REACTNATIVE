import { createContext, useState } from 'react'

export const globalContext = createContext({})

const GlobalProvider = ({ children }) => {
  const [getAnswerCategory, setGetAnswerCategory] = useState(null)
  function getCategory(category) {
    setGetAnswerCategory(category)
  }
  const values = {
    getCategory,
    getAnswerCategory
  }
  return <globalContext.Provider value={values}>{children}</globalContext.Provider>
}

export default GlobalProvider
