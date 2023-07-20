import { Entypo } from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#dc2626',
    paddingVertical: 9,
    paddingHorizontal: 20,
    marginHorizontal: 33,
    marginVertical: 9,
    borderRadius: 20
  }
})

function TaskRemoveIcon({ task, removeTask }) {
  const handleRemoveTask = () => removeTask(task.id)

  return (
    <Pressable onPress={handleRemoveTask} style={styles.container}>
      <Entypo name='trash' size={30} color='#ffffff' />
    </Pressable>
  )
}

export default TaskRemoveIcon
