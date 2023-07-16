// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import NavigationProvider from './src/navigation/navigation'

// function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <BottomSheetModalProvider>
//         <NavigationProvider />
//       </BottomSheetModalProvider>
//     </GestureHandlerRootView>
//   )
// }

// export default App;

import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Day_Calendar from "./src/screens/task/Day_Calendar";
import Weekly_Calendar from "./src/screens/task/Weekly_Calendar";


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Day_Calendar />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}