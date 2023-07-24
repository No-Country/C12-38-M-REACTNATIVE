import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { CreateTask } from '../../../../components'

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  tarea: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 36,
    letterSpacing: 0.54,
    alignSelf: 'center'
  },
  containerTarea: {
    backgroundColor: '#7141FA',
    width: 303,
    height: 37,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 5,
    shadowColor: '#B7B7B7',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 4
  }
})

function CreateTaskScreen() {
  return (
    <ScrollView style={styles.containerBody}>
      <View style={styles.containerTarea}>
        <Text style={styles.tarea}>Nueva Tarea</Text>
      </View>
      <CreateTask />
    </ScrollView>
  )
}

export default CreateTaskScreen
