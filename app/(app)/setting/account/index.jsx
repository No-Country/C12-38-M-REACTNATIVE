import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { AccountModificationBtn, AccountTextInput } from '../../../../components'
import { useAuth } from '../../../../hooks'

const styles = StyleSheet.create({
  screen: {
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

function AccountScreen() {
  const { user } = useAuth()
  const name = user?.displayName ?? 'LotToDo'
  const email = user?.email ?? 'example@example.com'

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>
        Confirmá o modificá los datos de tu cuenta <Text style={styles.span}>{name}</Text>
      </Text>
      <View style={styles.form}>
        <AccountTextInput data={{ type: 'name', placeHolder: name }} />
        <AccountTextInput data={{ type: 'email', placeHolder: email }} />
        <AccountTextInput data={{ type: 'password', placeHolder: '**********' }} />
        <AccountTextInput data={{ type: 'password', placeHolder: 'confirmar contraseña' }} />
      </View>
      <AccountModificationBtn />
    </ScrollView>
  )
}

export default AccountScreen
