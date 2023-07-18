import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.section}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        margin: 8,
        padding: 10,
        borderColor: '#000',
        borderWidth: 2.8,
        borderRadius: 6
    },
});