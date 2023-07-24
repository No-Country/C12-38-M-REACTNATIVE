import { AntDesign, Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { db } from '../../services/firebase/firebase.config'
import DropdownCategories from './dropdownCategories'

function CreateTask() {
  const [state, setstate] = useState({
    name: '',
    day: '',
    time: '',
    category: '',
    comment: ''
  })

  const handleChangeText = (name, value) => {
    setstate({ ...state, [name]: value })
  }

  const saveNewTask = async () => {
    if (state.name === '' || state.day === '' || state.time === '' || state.category === '' || state.comment === '') {
      alert('Please provide all date')
    } else {
      try {
        await addDoc(collection(db, 'tasks'), {
          name: state.name,
          day: state.day,
          time: state.time,
          category: state.category,
          comment: state.comment
        })
        alert('Registro Completado')
      } catch (e) {
        console.error('Error añadiendo el documento', e)
      }
    }
  }

  return (
    <View style={styles.containerBody}>
      <View>
        <TextInput
          placeholder='Tarea'
          placeholderTextColor='#B7B7B7'
          style={styles.textInput}
          onChangeText={(value) => handleChangeText('name', value)}
        />
      </View>
      <View>
        <TextInput
          placeholder='El día'
          placeholderTextColor='#B7B7B7'
          style={styles.textInput}
          onChangeText={(value) => handleChangeText('day', value)}
        />
        <Entypo style={styles.icon} name='calendar' size={24} color='#B7B7B7' />
      </View>
      <View>
        <TextInput
          placeholder='A las'
          placeholderTextColor='#B7B7B7'
          style={styles.textInput}
          onChangeText={(value) => handleChangeText('time', value)}
        />
        <AntDesign style={styles.icon} name='clockcircleo' size={24} color='#B7B7B7' />
      </View>
      
      <DropdownCategories />
      
      <Link href='../../src/screens/screen'>
        <TouchableOpacity style={styles.button} onPress={() => saveNewTask()}>
          <Text style={styles.buttonText}>AGREGAR</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  containerBody: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: 288,
    height: 40,
    borderColor: '#D9D9D9',
    borderWidth: 2,
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
})

export default CreateTask
