import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  containerBody: {
   justifyContent: 'center',
   alignItems: 'center'
  },
  textInput: {
   width: 288,
   height: 40,
   borderColor: '#D9D9D9',
   borderWidth: 3,
   borderRadius: 12,
   fontSize: 14,
   fontWeight: '400',
   backgroundColor: '#FFFFFF',
   paddingStart: 16,
   paddingTop: 8,
   paddingEnd: 16,
   paddingBottom: 8,
   marginTop: 25
  },
  icon: {
   position: 'absolute',
   alignSelf: 'flex-end',
   right: 14,
   marginTop: 32
  },
  button: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#01AC46',
   borderWidth: 1,
   borderRadius: 10,
   borderColor: '#FFFFFF',
   width: 303,
   height: 36,
   marginTop: 33
  },
  buttonText: {
   color: '#FFFFFF',
   fontFamily: 'Roboto',
   fontWeight: '400',
   fontSize: 14
  }
 });
 
 const CreateTask = () => {

  const ButtonAgregar = () => {}

  return (
    <View style={styles.containerBody}>
      <View>
       <TextInput placeholder='Tarea' placeholderTextColor='#B7B7B7' style={styles.textInput} />
      </View>
      <View>
       <TextInput placeholder='El día' placeholderTextColor='#B7B7B7' style={styles.textInput} />
       <Entypo style={styles.icon} name="calendar" size={24} color="#B7B7B7" />
      </View>
      <View>
       <TextInput placeholder='A las' placeholderTextColor='#B7B7B7' style={styles.textInput}  />
       <AntDesign style={styles.icon} name="clockcircleo" size={24} color="#B7B7B7" />
      </View>
      <View>
       <TextInput placeholder='Categoría' placeholderTextColor='#B7B7B7' style={styles.textInput} />
       <AntDesign style={styles.icon} name="caretdown" size={24} color="#B7B7B7" />
      </View>
      <View>
       <TextInput placeholder='Añadir un comentario' placeholderTextColor='#B7B7B7' style={styles.textInput} />
      </View>
      <TouchableOpacity style={styles.button} onPressIn={ButtonAgregar}>
       <Text style={styles.buttonText}>AGREGAR</Text>
      </TouchableOpacity>
    </View>
  )
 }


 export default CreateTask;