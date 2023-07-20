import { View, StyleSheet } from 'react-native'
import GradientButton from '../../../../components/buttons/GradientButton'
import { ButtonCategory } from '../../../../components/buttons/ButtonCategory'

const style = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 20
  }
})
const index = () => {
  return (
    <View style={style.cont}>
      <ButtonCategory />
      <GradientButton color='#4D9DE0' />
      <GradientButton color='#4D9DE0' />
      <GradientButton color='#4D9DE0' />
    </View>
  )
}

export default index
