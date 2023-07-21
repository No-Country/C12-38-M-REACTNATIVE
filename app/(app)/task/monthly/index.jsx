import { StyleSheet, View } from 'react-native'
import Calendar from '../../../../components/monthly/calendar'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

function MonthlyScreen() {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  )
}

export default MonthlyScreen
