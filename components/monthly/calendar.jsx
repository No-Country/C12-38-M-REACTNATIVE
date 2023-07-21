import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import {CalendarList, LocaleConfig} from 'react-native-calendars';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: 360, 
    justifyContent: 'center',
    alignSelf: 'center'
  },
  theme: {
    textSectionTitleColor: '#D9D9D9',
    selectedDayBackgroundColor: '#aa8efa'
  }
})

function Calendar () {

  const [selected, setSelected] = useState('');

  const trabajo = {key: 'trabajo', color: '#2563eb', selectedDotColor: '#2563eb'};
  const ejercicio = {key: 'ejercicio', color: '#dc2626', selectedDotColor: '#dc2626'};
  const compras = {key: 'compras', color: '#ca8a04', selectedDotColor: '#ca8a04'};
  const familia = {key: 'familia', color: '#7c3aed', selectedDotColor: '#7c3aed'};
  const plus = { key: 'plus', color: '#db2777', selectedDotColor: '#db2777' }

  LocaleConfig.locales['es/ES'] = {
    monthNames: [
     "Enero",
     "Febrero",
     "Marzo",
     "Abril",
     "Mayo",
     "Junio",
     "Julio",
     "Agosto",
     "Septiembre",
     "Octubre",
     "Noviembre",
     "Diciembre",
     ],
     monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
     dayNames: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ],
     dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb" ],
     today: "Hoy"
     };
    LocaleConfig.defaultLocale = "es/ES";
    

  return (
    <View style={styles.container}>
      <CalendarList
      theme={styles.theme}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markingType={'multi-dot'}
      markedDates={{
        [selected]: {selected: true},
        '2023-07-25': {dots: [trabajo, compras]},
        '2023-07-26': {dots: [familia, ejercicio]},
        '2023-07-10': {dots: [familia]}
      }}
      disableMonthChange={false}
      pastScrollRange={50}
      futureScrollRange={50}
      firstDay={1}
      />
    </View>
  )
}

export default Calendar