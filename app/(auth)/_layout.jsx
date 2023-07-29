import { Redirect, Slot } from 'expo-router'
import { Text } from 'react-native'
import { useAuth } from '../../hooks'

function AuthLayout() {
  const { user } = useAuth()
  if (user === false) return <Text>CARGANDO</Text>
  if (user) return <Redirect href='/' />

  return <Slot />
}

export default AuthLayout
