import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { TaskRemoveIcon } from '../../../../components'
import { ButtonCategory } from '../../../../components/buttons/ButtonCategory'
import GradientButton from '../../../../components/buttons/GradientButton'

const style = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 20
  }
})

const CategoryScreen = () => {
  const [listOfTasks, setListOfTasks] = useState([
    { id: 1, color: '#4D9DE0' },
    { id: 2, color: '#E15554' },
    { id: 3, color: '#01AC46' },
    { id: 4, color: '#E1BC29' },
    { id: 5, color: '#4D9DE0' },
    { id: 6, color: '#4D9DE0' }
  ])

  const removeTask = (id) => {
    setListOfTasks((prevListOfTasks) => prevListOfTasks.filter((task) => task.id !== id))
  }

  return (
    <View style={style.cont}>
      <ButtonCategory />
      <SwipeListView
        data={listOfTasks}
        renderItem={({ item }) => <GradientButton color={item.color} />}
        renderHiddenItem={({ item }) => <TaskRemoveIcon task={item} removeTask={removeTask} />}
        disableRightSwipe
        stopRightSwipe={-70}
        rightOpenValue={-70}
      />
    </View>
  )
}

export default CategoryScreen
