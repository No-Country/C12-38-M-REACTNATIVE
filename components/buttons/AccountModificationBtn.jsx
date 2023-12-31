import { Pressable, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  Pressable: {
    backgroundColor: '#01AC46',
    borderRadius: 10,
    paddingHorizontal: 70,
    paddingVertical: 10
  },
  text: {
    fontSize: 14,
    color: '#fff'
  }
})

function AccountModificationBtn() {
  return (
    <Pressable style={styles.Pressable}>
      <Text style={styles.text}>GUARDAR CAMBIOS</Text>
    </Pressable>
  )
}
export default AccountModificationBtn
