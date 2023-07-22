import { useContext } from 'react'
import { UserContext } from '../context/user.context'

function useAuth() {
  const context = useContext(UserContext)
  return context
}

export { useAuth }
