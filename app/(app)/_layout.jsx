import { Entypo } from '@expo/vector-icons'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Redirect, Stack, useRouter } from 'expo-router'
import { useRef } from 'react'
import { Text } from 'react-native'
import { ProfileImage, SettingModal, TabBar } from '../../components'
import GlobalProvider from '../../context/global.context'
import { useAuth } from '../../hooks'
function AppLayout() {
  const { user } = useAuth()

  const bottomSheetModalRef = useRef(null)

  const handleModalOpen = () => bottomSheetModalRef.current?.present()
  const handleModalClose = () => bottomSheetModalRef.current?.dismiss()

  if (user === false) return <Text>CARGANDO</Text>
  if (!user) return <Redirect href='/login' />

  return (
    <GlobalProvider>
      <BottomSheetModalProvider>
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
            headerRight: () => <ProfileImage onModalOpen={handleModalOpen} />,
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
          <Stack.Screen name='task/category/[id]/index' options={{ title: 'Categorias' }} />
        </Stack>
        <TabBar />
        <SettingModal ref={bottomSheetModalRef} onModalClose={handleModalClose} />
      </BottomSheetModalProvider>
    </GlobalProvider>
  )
}

export default AppLayout
