import { useState } from 'react'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'
import CheckboxButton from './CheckboxButton'

const categoryColors = {
  Pendiente: '#01AC46',
  Trabajo: '#4D9DE0',
  Ejercicio: '#E15554',
  Compras: '#E1BC29',
  Familia: '#7768AE',
  Otro: '#59E4DF'
}

const GradientButton = ({ color, tarea, hora, dia, categoria, taskId, selected }) => {
  const [isChecked, setIsChecked] = useState(selected);

  const handleCheckedChange = (newValue) => {
    setIsChecked(newValue);
  }

  return (
    <LinearGradient
      style={[styles.container, isChecked ? {opacity: .8} : {}]}
      colors={[categoryColors[color], '#f1f1f1']}
      start={{ x: 0.8, y: 0 }}
      end={{ x: 0.8, y: 1.2 }}
    >
      <View>
        <Text style={styles.text}>{tarea}</Text>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons name='clock-time-four-outline' size={20} color='#5C5A5A' />
          <Text style={styles.text}>
            {hora}    {dia}
          </Text>
        </View>
        <View
          style={{
            ...styles.textContainer,
            marginLeft: 7,
            gap: 16
          }}
        >
          <FontAwesome name='exclamation' size={18} color='#A90404' />
          <Text style={styles.text}>{categoria}</Text>
        </View>
        <View style={styles.check}>
          <CheckboxButton taskID={taskId} selected={selected} onCheckedChange={handleCheckedChange}/>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 9,
    paddingHorizontal: 20,
    marginHorizontal: 33,
    marginVertical: 9,
    borderRadius: 20
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  text: {
    fontSize: 18,
    marginVertical: 5,
    fontWeight: '500'
  },

  check: {
    position: 'absolute',
    top: 29,
    right: -7,
  }
})

export default GradientButton
