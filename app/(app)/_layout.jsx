import { Entypo } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import { ProfileImage, TabBar } from '../../components'

function AppLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerTitleStyle: {
            color: '#ffffff',
            fontSize: 20,
            fontWeight: '600'
          },
          headerLeft: ({ canGoBack }) => {
            const { back } = useRouter()
            if (!canGoBack) return null
            return <Entypo onPress={back} name='chevron-left' size={32} color='#ffffff' style={{ marginLeft: 20 }} />
          },
          headerTitleAlign: 'center',
          headerRight: () => <ProfileImage />,
          headerStyle: { backgroundColor: '#7141FA' }
        }}
      >
        <Stack.Screen name='index' options={{ title: 'Inicio' }} />
        <Stack.Screen name='setting/account/index' options={{ title: 'Mi Cuenta' }} />
        <Stack.Screen name='setting/profile-image/index' options={{ title: 'Foto de Perfil' }} />
        <Stack.Screen name='task/create-task/index' options={{ title: 'Crear Tarea' }} />
        <Stack.Screen name='task/monthly/index' options={{ title: 'Mensual' }} />
        <Stack.Screen name='task/today/index' options={{ title: 'Hoy' }} />
        <Stack.Screen name='task/weekly/index' options={{ title: 'Semanal' }} />
      </Stack>
      <TabBar />
    </>
  )
}

export default AppLayout
