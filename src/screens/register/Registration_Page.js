import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { CustomButton } from "../../components/buttons/Button";
import CustomTextInput from "../../components/buttons/CustomTextInput";
import { LinearGradient } from "expo-linear-gradient";

function Registration_Page() {
    return (
        <ScrollView>
            <LinearGradient
                style={styles.container}
                colors={['#7141fa', '#f1f1f1']}
                start={{ x: 0.8, y: 0 }}
                end={{ x: .8, y: 1 }}
            >
                <View style={styles.title}>
                    <Text style={styles.title_text}>Regístrate en <Text style={styles.title_text_secundary}>LotToDo</Text></Text>
                </View>
                <CustomTextInput placeholder='Escribe tu Nombre' />
                <CustomTextInput placeholder='Escribe tu Email' />
                <CustomTextInput placeholder='Escribe tu Contraseña' />
                <CustomTextInput placeholder='Repite tu Contraseña' />
                <View>
                    <CustomButton buttonColor='#0BA14E' textColor='#fff' text='REGISTRAME' onPress={() => alert("Listo")} />
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 120,
        paddingRight: 35,
        paddingBottom: 0,
        paddingLeft: 35,
        backgroundColor: '#000',
        minHeight: 755
    },

    title: {
        paddingTop: 30,
        paddingRight: 0,
        paddingBottom: 50,
        paddingLeft: 8,
    },

    title_text: {
        fontSize: 25,
        width: 300,
        fontWeight: '700'
    },

    title_text_secundary: {
        fontSize: 30,
        fontWeight: '900'
    },
});


export default Registration_Page;