import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { doc, updateDoc } from '@firebase/firestore'
import { db } from '../../services/firebase/firebase.config' 

export default function App({ tarea, usuario }) { // pasar los props tarea y usuario
  const [isChecked, setChecked] = useState(false)

  const onButtonPress = () => {
    const refTask = doc(db, `/users/${usuario}/Year1/${tarea}`) // acceder al documento donde se guarda el valor del checkbox
    updateDoc(refTask, {  // actualizar el valor del checkbox
      checked: !isChecked // cambiar el valor a su opuesto
    });
    setChecked(!isChecked); // actualizar el estado local del checkbox
  };

  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={onButtonPress} // llamar a la función cuando se cambie el valor del checkbox
        color={isChecked ? '#4630EB' : undefined}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    margin: 8,
    padding: 10,
    borderColor: '#000',
    borderWidth: 2.8,
    borderRadius: 6
  }
})