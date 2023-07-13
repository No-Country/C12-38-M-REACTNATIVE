import { StyleSheet, Text, View } from 'react-native'
import { CategoryLinkList, TaskCategoryList } from '../components'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    paddingHorizontal: 16,
    paddingTop: 40
  },
  text: {
    gap: 18
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
  message: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  task: {
    fontSize: 32
  }
})

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.text}>
        <Text style={styles.date}>Viernes, 30 de junio de 2023</Text>
        <Text style={styles.message}>
          tienes <Text style={styles.task}>5 tareas</Text> hoy!
        </Text>
      </View>
      <CategoryLinkList />
      <TaskCategoryList />
    </View>
  )
}

export default HomeScreen
