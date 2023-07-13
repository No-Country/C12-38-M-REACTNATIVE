import { StyleSheet, View, Text } from 'react-native'
import AccountTextInput from '../../components/form-account-modification/AccountTextInput'
import AccountModificationBtn from '../../components/buttons/AccountModificationBtn'

function AccountModificationScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        Confirma o modifica los datos de tu <Text style={styles.span}>Cuenta</Text>
      </Text>
      <View style={styles.form}>
        <AccountTextInput data={{ type: 'name', placeHolder: 'Lucas' }} />
        <AccountTextInput data={{ type: 'email', placeHolder: 'LucasGomez@gmail.com' }} />
        <AccountTextInput data={{ type: 'password', placeHolder: '**********' }} />
        <AccountTextInput data={{ type: 'password', placeHolder: 'confirmar contraseña' }} />
      </View>
      <AccountModificationBtn />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    gap: 50
  },
  title: {
    width: 200,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 500,
    gap: 10
  },
  span: {
    fontSize: 20,
    fontWeight: 700
  },
  form: {
    gap: 35,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AccountModificationScreen
