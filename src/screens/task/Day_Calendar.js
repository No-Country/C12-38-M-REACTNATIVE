import { StyleSheet, ScrollView } from 'react-native'
import GradientButton from '../../../components/buttons/GradientButton'
import { DayIcon } from '../../../components/buttons/Icons'


function Day() {
    return (
        <ScrollView>
            <DayIcon text="xx de mes" />
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

export default Day;