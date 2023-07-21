import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../../../components/buttons/Button'
import CustomTextInput from '../../../components/buttons/CustomTextInput'
import { useAuth } from '../../../hooks'

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
    paddingLeft: 8
  },

  title_text: {
    fontSize: 25,
    width: 300,
    fontWeight: '700'
  },

  title_text_secundary: {
    fontSize: 30,
    fontWeight: '900'
  }
})

function RegisterScreen() {
  const { signUp, setUser } = useAuth()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleSignUp = async () => {
    try {
      if (form.password !== form.confirmPassword) return alert('Las contraseñas no coinciden')

      const { user } = await signUp(form)
      setUser(user)
      alert('Usuario creado ✅')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ScrollView>
      <LinearGradient
        style={styles.container}
        colors={['#7141fa', '#f1f1f1']}
        start={{ x: 0.8, y: 0 }}
        end={{ x: 0.8, y: 1 }}
      >
        <View style={styles.title}>
          <Text style={styles.title_text}>
            Regístrate en <Text style={styles.title_text_secundary}>LotToDo</Text>
          </Text>
        </View>
        <CustomTextInput
          value={form.name}
          onChange={(value) => handleOnChange('name', value)}
          placeholder='Escribe tu Nombre'
        />
        <CustomTextInput
          value={form.email}
          onChange={(value) => handleOnChange('email', value)}
          placeholder='Escribe tu Email'
        />
        <CustomTextInput
          value={form.password}
          onChange={(value) => handleOnChange('password', value)}
          placeholder='Escribe tu Contraseña'
        />
        <CustomTextInput
          value={form.confirmPassword}
          onChange={(value) => handleOnChange('confirmPassword', value)}
          placeholder='Repite tu Contraseña'
        />
        <View>
          <CustomButton buttonColor='#0BA14E' textColor='#fff' text='REGISTRAME' onPress={handleSignUp} />
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default RegisterScreen
