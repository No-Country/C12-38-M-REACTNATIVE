import { StyleSheet, View } from 'react-native'
import TaskCategory from './TaskCategory'

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16
  }
})

function TaskCategoryList() {
  return (
    <View style={styles.list}>
      <TaskCategory category='Pendientes' iconName={'pin'} color={'#16a34a'} />
      <TaskCategory category='Trabajo' iconName={'briefcase'} color={'#2563eb'} />
      <TaskCategory category='Ejercicio' iconName={'man'} color={'#dc2626'} />
      <TaskCategory category='Compras' iconName={'shopping-cart'} color={'#ca8a04'} />
      <TaskCategory category='Familia' iconName={'users'} color={'#7c3aed'} />
      <TaskCategory iconName={'plus'} color={'#db2777'} />
    </View>
  )
}

export default TaskCategoryList
