import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  link: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#8b5cf6'
  },
  text: {
    color: '#6b7280'
  }
})

function CategoryLink({ to, children }) {
  const { navigate } = useNavigation()

  const handleOnPress = () => {
    navigate(to)
  }

  return (
    <Pressable onPress={handleOnPress} style={styles.link}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default CategoryLink
