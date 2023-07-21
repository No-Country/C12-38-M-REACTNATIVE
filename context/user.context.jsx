import { createUserWithEmailAndPassword } from 'firebase/auth'
import { createContext, useState } from 'react'
import { auth } from '../services/firebase/firebase.config'

export const UserContext = createContext({})

function UserProvider({ children }) {
  const [user, setUser] = useState(false)

  const signUp = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const values = { user, setUser, signUp }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserProvider
