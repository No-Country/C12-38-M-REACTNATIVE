import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { db } from '../../services/firebase/firebase.config'
import { updateDoc, doc } from '@firebase/firestore'

export default function App({ taskID, selected, onCheckedChange }) {
  const [isChecked, setChecked] = useState(selected)
  const [showCompletedMessage, setShowCompletedMessage] = useState(selected)

  const handleValueChange = async (newValue) => {
    if (newValue) {
      setChecked(newValue)
      setShowCompletedMessage(newValue);
      await updateDoc(doc(db, 'tasks', taskID), { selected: newValue });
      onCheckedChange(newValue);
    }
  }

  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={handleValueChange}
        color={isChecked ? '#4630EB' : undefined}
      />
      {showCompletedMessage && <Text style={styles.text}>🚀</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  checkbox: {
    margin: 8,
    padding: 12,
    borderColor: '#000',
    borderWidth: 2.8,
    borderRadius: 6,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: -5
  }
})