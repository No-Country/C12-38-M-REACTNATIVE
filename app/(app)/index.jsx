import { Link } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { CategoryLinkList, TaskCategoryList } from '../../components'
import UpdatedDate from '../../components/date/updatedDate'

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
        <UpdatedDate />
        <Text style={styles.message}>
          tienes <Text style={styles.task}>5 tareas</Text> hoy!  
        </Text> 
      </View>
      <CategoryLinkList />
      <TaskCategoryList />
      {/* LINKS DE AYUDA TEMPORALES */}
      <Link href='/setting/account'>Cuenta</Link>
      <Link href='/setting/profile-image'>foto de perfil</Link>
      <Link href='/task/create-task'>create taks</Link>
      <Link href='/login'>login</Link>
      <Link href='/register'>register</Link>
      <Link href='/task/category'>category</Link>
    </ScrollView>
  )
}

export default HomeScreen
