import React, { Button, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { View, LinearGradient, TextInput, Text, Presable } from 'react-native';

const LogIn = ()=> {
    return (
        <View style={styles.container}> 
            <LinearGradient 
                colors={['transparent', '#ffffff', '#7141FA', 'transparent']}
                start={{ x: 0.8, y: 0  }}
                end={{ x: 0.8, y: 1 }} 
                style={styles.gradient}> 

                <TextInput style={styles.emailInput} placeholder='Ingresa tu email'/>
                <TextInput style={styles.passwordInput} placeholder='Contraseña'/>

                <Pressable style={styles.LogInButton}>
                    <Text>LOG IN</Text>
                </Pressable>

                <Text style={styles.textIngreso} >O ingresa con</Text>

                <View style={styles.buttonContainer}>
                    <Button title='Google' onPress={this._onPressButton} style={styles.buttonGoogle}>
                        <Text style={styles.buttonText}>Google</Text>
                    </Button> 
                    <Button title='Facebook' onPress={this._onPressButton} style={styles.buttonFacebbok}>
                        <Text style={styles.buttonText}>Facebook</Text>
                    </Button>
                </View>

                <Text style={styles.textRegistro}> ¿No tienes cuenta? 
                    <Text style={styles.linkRegistro}>Regístrate ahora</Text> 
                </Text>
                
            </LinearGradient>

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
    },
    emailInput: {
        marginTop: 177,
        borderWidth: 3,
        borderColor: "#D9D9D9",
        width: 288,
        height: 40,
        borderRadius: 12,
        color: "#D9D9D9"
    },
    passwordInput: {
        marginTop: 33,
        borderWidth: 3,
        borderColor: "#D9D9D9",
        width: 288,
        height: 40,
        borderRadius: 12,
        color: "#D9D9D9"
    },
    LogInButton: {
        width: 284,
        height: 36,
        marginTop: 33,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        backGroundColor: '#01AC46',
        alignItems: 'center'
    },
    textIngreso: {
        marginTop: 20,
        fontWeight: 'normal',
        fontSize: 12
    },
    buttonContainer:{
        flexDirection: 'row' 
    },
    buttonGoogle:{
        width: 135,
        height: 36,
        marginLeft: 36,
        marginRight: 9,
        marginTop: 20,
        borderRadius: 12,
        backGroundColor: 'white'
    },
    buttonFacebbok:{
        width: 135,
        height: 36,
        marginLeft: 9,
        marginRight: 36,
        marginTop: 20,
        borderRadius: 12,
        backGroundColor: '#4267B2'
    },
    buttonText:{
        color: '#D9D9D9',
        fontSize: 14
    },
    textRegistro: {
        marginTop: 40,
    },
    linkRegistro: {
        fontWeight: 'bold'
    }
    
})

export default LogIn;
