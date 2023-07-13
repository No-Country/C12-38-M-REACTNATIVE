// import NavigationProvider from './src/navigation/navigation'

// function App() {
//   return <NavigationProvider />
// }

// export default App

import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import Registration_Page from './src/screens/register/Registration_Page';
import Weekly_Calendar from './src/screens/task/Weekly_Calendar';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Registration_Page' component={Registration_Page} options={{ title: 'Registration Page', headerShown: false }} />
      <Stack.Screen name='Weekly_Calendar'
        component={Weekly_Calendar}
        options={{
          title: 'Weekly Calendar',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => <Image source={require('./logo.png')} style={{ width: 40, height: 40 }} /> 
        }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}