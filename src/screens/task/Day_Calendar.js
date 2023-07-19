import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useRef } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import GradientButton from "../../components/buttons/GradientButton";
import { ProfileImage, SettingModal } from '../../components'
import { SettingScreen, TaskScreen } from '../../screens'
import { DayIcon } from '../../components/buttons/Icons'

const { Navigator, Screen } = createBottomTabNavigator()

function Day() {
    return (
        <ScrollView>
            <DayIcon text="xx de mes" />
            <GradientButton color={'#E15554'} />
            <GradientButton color={'#01AC46'} />
            <GradientButton color={'#E1BC29'} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginHorizontal: 15,
        marginBottom: 3,
        fontWeight: '500'
    }
})

function Day_Calendar() {
    const bottomSheetModalRef = useRef()
    const handleModalOpen = () => bottomSheetModalRef.current?.present()

    return (
        <NavigationContainer>
            <StatusBar style='inverted' />
            <Navigator
                screenOptions={{
                    headerTitleStyle: { color: '#ffffff', fontSize: 20, fontWeight: '600' },
                    headerTitleAlign: 'center',
                    headerRight: () => <ProfileImage onPress={handleModalOpen} />,
                    headerStyle: { backgroundColor: '#7141FA', height: 120 },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#b2b2b2',
                    tabBarStyle: {
                        backgroundColor: '#7141FA',
                        borderRadius: 100,
                        marginHorizontal: 16,
                        marginVertical: 32,
                        height: 66
                    }
                }}
                sceneContainerStyle={{
                    backgroundColor: '#ffffff'
                }}
            >
                <Screen
                    name='Inicio'
                    component={Day}
                    options={{
                        tabBarIcon: ({ color }) => <Entypo name='home' size={32} color={color} />
                    }}
                />
                <Screen
                    name='Nueva Tarea'
                    component={TaskScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Entypo name='circle-with-plus' size={48} color={color} />
                    }}
                />
                <Screen
                    name='Configuración'
                    component={SettingScreen}
                    options={{
                        tabBarIcon: ({ color }) => <Entypo name='cog' size={32} color={color} />
                    }}
                />
            </Navigator>
            <SettingModal ref={bottomSheetModalRef} />
        </NavigationContainer>
    )
}

export default Day_Calendar;