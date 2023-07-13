import { View, Text, StyleSheet } from 'react-native';
import { ChangeProfileImage } from '../../components';

const styles = StyleSheet.create ({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 titleContainer: {
  width: 149,
  height: 54,
  marginBottom: 57
 },
 title: {
  fontSize: 16,
  fontWeight: '500',
  color: '#000000',
  textAlign: 'center'
 },
 titleFoto: {
  fontSize: 20
 }
})

function ChangeProfileLink () {
 return (
  <View style={styles.container} >
   <View style={styles.titleContainer}>
    <Text style={styles.title}>Confirma o modifica tu <Text style={styles.titleFoto}>Foto</Text> de perfil</Text>
   </View>
   <ChangeProfileImage />
  </View>
 )
}

export default ChangeProfileLink;