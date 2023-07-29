import { collection, onSnapshot, orderBy, query, doc, deleteDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { TaskRemoveIcon } from '../../../../components'
import GradientButton from '../../../../components/buttons/GradientButton'
import { WeekButton } from '../../../../components/buttons/Icons'
import { db } from '../../../../services/firebase/firebase.config'

function WeeklyScreen() {
  const removeTask = async (id) => {
    const taskRef = doc(db, 'tasks', id)
    await deleteDoc(taskRef)
    setTask((prevListOfTasks) => prevListOfTasks.filter((task) => task.id !== id))
  }

  const [tasks, setTask] = useState([])
  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const currentDate = new Date(`${day}/${month}/${year}`.replace(/\//g, '-'))

  useEffect(() => {
    const taskCollection = collection(db, 'tasks')
    const orderTaskCollection = query(taskCollection, orderBy('createdAt', 'desc'))
    onSnapshot(orderTaskCollection, (querySnapshot) => {
      const tasks = []
      querySnapshot.forEach((doc) => {
        const { name, day, time, category, selected } = doc.data()
        tasks.push({
          id: doc.id,
          name,
          day,
          time,
          category,
          selected
        })
      })
      const filterTasks = tasks.filter((data) => {
        const tipeOfDate = new Date(data.day.replace(/\//g, '-'))
        const diference = (tipeOfDate - currentDate) / (1000 * 60 * 60 * 24)
        return data.day.split('/')[0] >= day && data.day.split('/')[1] === month && diference >= 7
      })
      setTask(filterTasks)
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <WeekButton
        text='Semana x de mes'
        onPressLeft={() => console.log('Navegar a la página anterior')}
        onPressRight={() => console.log('Navegar a la página siguiente')}
      />

      <SwipeListView
        data={tasks}
        renderItem={({ item }) => (
          <GradientButton
            taskId={item.id}
            color={item.category}
            tarea={item.name}
            hora={item.time}
            dia={item.day}
            categoria={item.category}
            selected={item.selected}
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
