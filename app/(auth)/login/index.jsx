import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 90
  },
  emailInput: {
    marginTop: 177,
    borderWidth: 3,
    borderColor: '#D9D9D9',
    width: 288,
    height: 40,
    borderRadius: 12,
    placeholderTextColor: '#D9D9D9',
    textAlign: 'center'
  },
  passwordInput: {
    marginTop: 33,
    borderWidth: 3,
    borderColor: '#D9D9D9',
    width: 288,
    height: 40,
    borderRadius: 12,
    placeholderTextColor: '#D9D9D9',
    textAlign: 'center'
  },
  LogInButton: {
    width: 284,
    height: 36,
    marginTop: 33,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#01AC46',
    alignItems: 'center'
  },
  textIngreso: {
    marginTop: 20,
    fontWeight: 'normal',
    fontSize: 12
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonGoogle: {
    width: 135,
    height: 36,
    marginTop: 33,
    marginRight: 9,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonFacebbok: {
    width: 135,
    height: 36,
    marginTop: 33,
    marginLeft: 9,
    borderColor: '#3A5897',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#3A5897',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonTextGoogle: {
    color: 'black',
    fontSize: 14
  },
  buttonTextFacebook: {
    color: '#D9D9D9',
    fontSize: 14
  },
  textRegistro: {
    marginTop: 40
  },
  linkRegistro: {
    fontWeight: 'bold'
  }
})

function LoginScreen() {
  return (
    <LinearGradient
      colors={['#ffffff', '#7141FA']}
      start={{ x: 0.8, y: 1 }}
      end={{ x: 0.8, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <TextInput style={styles.emailInput} placeholder='Ingresa tu email' />
        <TextInput style={styles.passwordInput} placeholder='Contraseña' />
        <Pressable style={styles.LogInButton}>
          <Text>LOG IN</Text>
        </Pressable>
        <Text style={styles.textIngreso}>O ingresa con</Text>
        <View style={styles.buttonContainer}>
          <Pressable title='Google' style={styles.buttonGoogle}>
            <Image source={require('../../../assets/images/google-logo.png')} style={{ width: 24, height: 24 }} />
            <Text style={styles.buttonTextGoogle}>Google</Text>
          </Pressable>
          <Pressable title='Facebook' style={styles.buttonFacebbok}>
            <Image source={require('../../../assets/images/facebook-logo.png')} style={{ width: 24, height: 24 }} />
            <Text style={styles.buttonTextFacebook}>Facebook</Text>
          </Pressable>
        </View>
        <Text style={styles.textRegistro}>
          ¿No tienes cuenta?
          <Link href='/register' asChild>
            <Pressable>
              <Text style={styles.linkRegistro}> Regístrate ahora </Text>
            </Pressable>
          </Link>
        </Text>
      </View>
    </LinearGradient>
  )
}

export default LoginScreen
