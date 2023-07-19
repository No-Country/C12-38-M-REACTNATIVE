import { StyleSheet, View } from 'react-native'
import TabItem from './TabItem'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7141FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 40,
    marginBottom: 32
  }
})

function TabBar() {
  return (
    <View style={styles.container}>
      <TabItem to='/' iconName='home' iconSize={32} />
      <TabItem to='/task/create-task' iconName='circle-with-plus' iconSize={48} />
      <TabItem to='/setting/account' iconName='cog' iconSize={32} />
    </View>
  )
}

export default TabBar
