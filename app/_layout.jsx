import { Slot } from 'expo-router'
import UserProvider from '../context/user.context'

function RootLayout() {
  return (
    <UserProvider>
      <Slot />
    </UserProvider>
  )
}

export default RootLayout
