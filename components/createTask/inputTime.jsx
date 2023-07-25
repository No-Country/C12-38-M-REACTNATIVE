import { AntDesign} from '@expo/vector-icons'
import { useState } from 'react'
import { StyleSheet, TextInput, View, Pressable, Platform } from 'react-native'
import DateTimePicker  from '@react-native-community/datetimepicker';

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

function InputTime({handleChangeText}){

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [hour, setHour] = useState('');

  const toggleDatepicker = () => {
   setShowPicker(!showPicker);
  };
  
  const formatDate = (rawDate) => {
   let date = new Date(rawDate);

   let hour = date.getHours();
   let minutes = date.getMinutes();

   hour = hour < 10 ? `0${hour}` : hour;
   minutes = minutes < 10 ? `0${minutes}` : minutes;

   return `${hour}:${minutes}`
 }

  const onChange = ({type}, selectedHour) => {
   if (type == 'set') {
   const currentHour = selectedHour;
   setDate(currentHour);
   handleChangeText('time', formatDate(currentHour))

     if(Platform.OS === 'android') {
      toggleDatepicker();
      setHour(formatDate(currentHour));
      }
      } else {
         toggleDatepicker();
      }
    };

 return(
  <View>
    <View>
      {showPicker && (
      <DateTimePicker
        mode='time'
        display='spinner'
        value={date}
        onChange={onChange}
        is24Hour= {true}
     />
       )}
      {!showPicker &&(
      <Pressable onPress={toggleDatepicker} >
         <TextInput
          placeholder='A las'
          placeholderTextColor='#B7B7B7'
          style={styles.textInput}
          value={hour}
          onChangeText={setHour}
          editable={false}
         />
         <AntDesign style={styles.icon} name='clockcircleo' size={24} color='#B7B7B7' />
      </Pressable>
      )}
   </View>

  </View>
 )
}

export default InputTime