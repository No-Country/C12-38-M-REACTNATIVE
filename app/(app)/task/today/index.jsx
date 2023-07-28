import { collection, onSnapshot, orderBy, query, doc, deleteDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { TaskRemoveIcon } from '../../../../components'
import GradientButton from '../../../../components/buttons/GradientButton'
import { DayIcon } from '../../../../components/buttons/Icons'
import { db } from '../../../../services/firebase/firebase.config'

function TodayScreen() {
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

  const currentDate = `${day}/${month}/${year}`
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
      const filterTasks = tasks.filter((data) => data.day === currentDate)
      setTask(filterTasks)
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <DayIcon text='xx de mes' />
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

export default TodayScreen
