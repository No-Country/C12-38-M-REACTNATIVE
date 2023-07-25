import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { TaskRemoveIcon } from '../../../../components'
import GradientButton from '../../../../components/buttons/GradientButton'
import { ArrowIcon } from '../../../../components/buttons/Icons'
import { db } from '../../../../services/firebase/firebase.config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

function WeeklyScreen() {
  // const [listOfTasks, setListOfTasks] = useState([
  //   { id: 1, color: '#4D9DE0' },
  //   { id: 2, color: '#E15554' },
  //   { id: 3, color: '#01AC46' },
  //   { id: 4, color: '#E1BC29' },
  //   { id: 5, color: '#4D9DE0' },
  //   { id: 6, color: '#4D9DE0' }
  // ])

  const [tasks, setTask] = useState([])

  useEffect(() => {
    const taskCollection = collection(db, 'tasks')
    const orderTaskCollection = query(taskCollection, orderBy("createdAt", "desc"))
    onSnapshot(orderTaskCollection, (querySnapshot) => {
      const tasks = []
      querySnapshot.forEach((doc) => {
        const { name, day, time, category } = doc.data()
        tasks.push({
          id: doc.id,
          name,
          day,
          time,
          category
        })
      })
      setTask(tasks)
    })
  }, [])
  
  const removeTask = (id) => {
    setListOfTasks((prevListOfTasks) => prevListOfTasks.filter((task) => task.id !== id))
  }
  
  return (
    <View style={{ flex: 1 }}>
      <ArrowIcon
        text='Semana x de mes'
        leftIcon='chevron-left'
        rightIcon='chevron-right'
        onPressLeft={() => console.log('Navegar a la página anterior')}
        onPressRight={() => console.log('Navegar a la página siguiente')}
        />
      <View>
        <Text style={styles.text}>Domingo X</Text>
      </View>
      <SwipeListView
        data={tasks}
        renderItem={({ item }) => (
          <GradientButton
            key={item.id}
            color={item.category}
            tarea={item.name}
            hora={item.time}
            dia={item.day}
            categoria={item.category}
          />
        )}
        renderHiddenItem={({ item }) => <TaskRemoveIcon task={item} removeTask={removeTask} />}
        disableRightSwipe
        stopRightSwipe={-70}
        rightOpenValue={-70}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 3,
    fontWeight: '500'
  }
})

export default WeeklyScreen
