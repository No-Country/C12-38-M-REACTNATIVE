import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function CustomButton(props) {

    const { text, onPress, buttonColor, textColor } = props;

    return (
        <TouchableOpacity style={{ ...styles.button, backgroundColor: buttonColor }} onPress={onPress}>
            <Text style={{ ...styles.buttonText, color: textColor, fontWeight: 'bold' }}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        marginVertical: 38,
        paddingVertical: 10,
        width: '100%',
        borderRadius: 10
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 15

    }
})