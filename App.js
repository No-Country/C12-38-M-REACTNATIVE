import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import NavigationProvider from './src/navigation/navigation'

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationProvider />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default App
