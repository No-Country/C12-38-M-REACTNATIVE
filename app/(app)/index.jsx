import { Link } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { CategoryLinkList, TaskCategoryList } from '../../components'

const styles = StyleSheet.create({
  screen: {
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
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.text}>
        <Text style={styles.date}>Viernes, 30 de junio de 2023</Text>
        <Text style={styles.message}>
          tienes <Text style={styles.task}>5 tareas</Text> hoy!
        </Text>
      </View>
      <CategoryLinkList />
      <TaskCategoryList />
      {/* LINKS DE AYUDA */}
      <Link href={'/setting/account'}>Cuenta</Link>
      <Link href={'/setting/profile-image'}>foto de perfil</Link>
      <Link href={'/task/create-task'}>create taks</Link>
      <Link href={'/login'}>login</Link>
      <Link href={'/register'}>register</Link>
    </ScrollView>
  )
}

export default HomeScreen
