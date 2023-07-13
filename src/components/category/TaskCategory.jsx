import { Entypo } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 16
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  }
})

function TaskCategory({ category, iconName, color }) {
  const containerStyle = {
    backgroundColor: color
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Entypo name={iconName} size={40} color='#ffffff' />
      <Text style={styles.text}>{category}</Text>
    </View>
  )
}

export default TaskCategory
