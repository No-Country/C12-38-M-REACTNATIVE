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
      <CategoryLink to='today'>Hoy</CategoryLink>
      <CategoryLink to='weekly'>Semanal</CategoryLink>
      <CategoryLink to='monthly'>Mensual</CategoryLink>
    </View>
  )
}

export default CategoryLinkList
