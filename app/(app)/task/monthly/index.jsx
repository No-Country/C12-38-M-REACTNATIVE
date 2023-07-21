import { StyleSheet, View } from 'react-native'
import Calendars from '../../../../components/monthly/calendar'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

function MonthlyScreen() {
  return (
    <View style={styles.container}>
      <Calendars />
    </View>
  )
}

export default MonthlyScreen
