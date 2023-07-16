import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export function ArrowIcon({ text, leftIcon, rightIcon, onPressLeft, onPressRight }) {
    return (
        <TouchableOpacity style={styles.button} disabled>
            <TouchableOpacity onPress={onPressLeft}>
                <Icon style name={leftIcon} size={20} color="#0a0a0a" />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={onPressRight}>
                <Icon name={rightIcon} size={20} color="#0a0a0a" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export function DayIcon({ text }) {
    return (
        <TouchableOpacity style={styles.day}>
            <Text style={styles.textDay}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9',
        marginVertical: 35,
        marginRight: 30,
        marginLeft: 30,
        padding: 15,
    },

    text: {
        color: '#0a0a0a',
        fontWeight: '500',
        fontSize: 19,
    },

    day: {
        alignItems: 'center',
        backgroundColor: '#7141FA',
        marginVertical: 35,
        marginHorizontal: 60,
        paddingVertical: 8,
        borderRadius: 10,
        elevation: 30,
    },

    textDay: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 19,
    },
});