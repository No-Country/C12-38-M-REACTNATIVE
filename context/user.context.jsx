import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from '../services/firebase/firebase.config'

export const UserContext = createContext({})

function UserProvider({ children }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const onSubscribeUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('existe usuario')
        setUser(user)
      } else {
        console.log('no existe usuario')
        setUser(null)
      }
    })

    return () => onSubscribeUser()
  }, [])

  const signUp = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const values = { user, setUser, signUp, logOut }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserProvider
