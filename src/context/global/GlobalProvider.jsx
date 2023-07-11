import { GlobalContext } from './GlobalContext'
const GlobalProvider = ({ children }) => {
  const content = {}

  return <GlobalContext.Provider value={content}>{children}</GlobalContext.Provider>
}

export { GlobalProvider }
