import React from "react";
import CheckboxButton from "../../components/buttons/CheckboxButton"
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";
import ArrowIcon from "../../components/buttons/Icons";

function Weekly_Calendar() {
    return (
        <ScrollView>
            <ArrowIcon
                text="Semana x de mes"
                leftIcon="chevron-left"
                rightIcon="chevron-right"
                onPressLeft={() => console.log('Navegar a la página anterior')}
                onPressRight={() => console.log('Navegar a la página siguiente')}
            />
            <CheckboxButton />
        </ScrollView>
    )
}

export default Weekly_Calendar;