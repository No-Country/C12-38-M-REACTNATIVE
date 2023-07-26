import { Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
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

function TaskCategory({ category, iconName, color, onPress, isSelected }) {
  const href = '/task/category'

  const containerStyle = {
    backgroundColor: color
  }
  return (
    <Link href={href} style={[styles.container, containerStyle]} asChild>
      <TouchableOpacity onPress={onPress}>
        <Entypo name={iconName} size={40} color='#ffffff' />
        {category && <Text style={styles.text}>{category}</Text>}
      </TouchableOpacity>
    </Link>
  )
}

export default TaskCategory
