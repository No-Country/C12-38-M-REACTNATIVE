import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ArrowIcon } from "../../../components/buttons/Icons";
import GradientButton from "../../../components/buttons/GradientButton";

function Weekly_Calendar() {
  return (
    <ScrollView>
      <ArrowIcon
        text="Semana x de mes"
        leftIcon="chevron-left"
        rightIcon="chevron-right"
        onPressLeft={() => console.log('Navegar a la página anterior')}
        onPressRight={() => console.log('Navegar a la página siguiente')}
      />
      <View>
        <Text style={styles.text}>Domingo X</Text>
      </View>
      <GradientButton color={'#E15554'} />
      <GradientButton color={'#01AC46'} />
      <GradientButton color={'#E1BC29'} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 3,
    fontWeight: '500'
  }
})

export default Weekly_Calendar;