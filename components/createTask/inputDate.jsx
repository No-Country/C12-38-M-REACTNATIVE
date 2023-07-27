import { Entypo } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import { Platform, Pressable, StyleSheet, TextInput, View } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    color: '#000',
    width: 303,
    height: 40,
    borderColor: '#D9D9D9',
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 14,
    fontWeight: '400',
    backgroundColor: '#FFFFFF',
    paddingStart: 16,
    paddingTop: 8,
    paddingEnd: 16,
    paddingBottom: 8,
    marginTop: 25
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 14,
    marginTop: 32
  }
})

function InputDate({ handleChangeText }) {
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const [dayInput, setDayInput] = useState('')

  const toggleDatepicker = () => {
    setShowPicker(!showPicker)
  }

  const formatDate = (rawDate) => {
    const date = new Date(rawDate)

    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    month = month < 10 ? `0${month}` : month
    day = day < 10 ? `0${day}` : day

    return `${day}/${month}/${year}`
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate
      setDate(currentDate)
      handleChangeText('day', formatDate(currentDate))

      if (Platform.OS === 'android') {
        toggleDatepicker()
        setDayInput(formatDate(currentDate))
      }
    } else {
      toggleDatepicker()
    }
  }

  return (
    <View>
      <View>
        {showPicker && <DateTimePicker mode='date' display='spinner' value={date} onChange={onChange} />}
        {!showPicker && (
          <Pressable onPress={toggleDatepicker}>
            <TextInput
              placeholder='El día'
              placeholderTextColor='#B7B7B7'
              style={styles.textInput}
              value={dayInput}
              onChangeText={setDayInput}
              editable={false}
            />
            <Entypo style={styles.icon} name='calendar' size={24} color='#B7B7B7' />
          </Pressable>
        )}
      </View>
    </View>
  )
}

export default InputDate
