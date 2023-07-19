import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import CheckboxButton from './CheckboxButton'
import { LinearGradient } from 'expo-linear-gradient'

const GradientButton = ({ color }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[color, '#f1f1f1']}
      start={{ x: 0.8, y: 0 }}
      end={{ x: 0.8, y: 1.2 }}
    >
      <View>
        <Text style={styles.text}>Tarea</Text>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons name='clock-time-four-outline' size={20} color='#5C5A5A' />
          <Text style={styles.text}>Horario</Text>
        </View>
        <View
          style={{
            ...styles.textContainer,
            marginLeft: 7,
            gap: 16
          }}
        >
          <FontAwesome name='exclamation' size={18} color='#A90404' />
          <Text style={styles.text}>Prioridad</Text>
        </View>
        <View style={styles.check}>
          <CheckboxButton />
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
    top: 34,
    right: 0
  }
})

export default GradientButton
