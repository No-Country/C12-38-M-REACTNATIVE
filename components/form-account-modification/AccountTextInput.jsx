import { StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    width: 270,
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: '#929090'
  }
})

function AccountTextInput({ data }) {
  return <TextInput value={data.value} type={data.type} placeholder={data.placeHolder} style={styles.textInput} />
}

export default AccountTextInput
