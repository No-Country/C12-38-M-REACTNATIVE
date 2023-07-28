import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { GradientButton, TaskRemoveIcon } from '../../../../../components'
import { ButtonCategory } from '../../../../../components/buttons/ButtonCategory'
import { globalContext } from '../../../../../context/global.context'
import { db } from '../../../../../services/firebase/firebase.config'

const CategoryScreen = () => {

  const { getAnswerCategory } = useContext(globalContext)

  const removeTask = (id) => {
    setTask((prevListOfTasks) => prevListOfTasks.filter((task) => task.id !== id))
  }

  const [tasks, setTask] = useState([])

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
      const filterTask = tasks.filter((data) => data.category === getAnswerCategory)
      setTask(filterTask)
    })
  }, [])

  return (
    <View style={style.cont}>
      <ButtonCategory selectedCategory={getAnswerCategory} />
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

const style = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 20
  }
})

export default CategoryScreen
