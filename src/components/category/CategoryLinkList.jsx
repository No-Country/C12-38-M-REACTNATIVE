import { StyleSheet, View } from 'react-native'
import CategoryLink from './CategoryLink'

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 24
  }
})

function CategoryLinkList() {
  return (
    <View style={styles.list}>
      <CategoryLink to={'Today'}>Hoy</CategoryLink>
      <CategoryLink to={'Weekly'}>Semanal</CategoryLink>
      <CategoryLink to={'Monthly'}>Mensual</CategoryLink>
    </View>
  )
}

export default CategoryLinkList;