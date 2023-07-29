import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebase/firebase.config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
    justifyContent: "center",
    alignSelf: "center"
  },
  theme: {
    textSectionTitleColor: "#D9D9D9",
    selectedDayBackgroundColor: "#aa8efa"
  }
});

function Calendar() {
  const [selected, setSelected] = useState("");
  const [markedDates, setMarkedDates] = useState({});

  const trabajo = { color: "#4D9DE0", selectedDotColor: "#4D9DE0" };
  const ejercicio = { color: "#E15554", selectedDotColor: "#E15554" };
  const compras = { color: "#E1BC29", selectedDotColor: "#E1BC29" };
  const familia = { color: "#7768AE", selectedDotColor: "#7768AE" };
  const otros = {color: "#59E4DF", selectedDotColor: "#59E4DF" };

  LocaleConfig.locales["es/ES"] = {
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
  

  useEffect(() => {
    loadTasksFromFirebase();
  }, []);

  const loadTasksFromFirebase = () => {
    const tasksRef = collection(db, "tasks");
    onSnapshot(tasksRef, (querySnapshot) => {
      const newMarkedDates = {...markedDates};

      querySnapshot.forEach((doc) => {
        const task = doc.data();
        const formattedDate = task.day.split("/").reverse().join("-");
        
        if (formattedDate) {
          if (!newMarkedDates[formattedDate]) {
            newMarkedDates[formattedDate] = { dots: [] };
          }
          const marker = getMarkerCategory(task.category, doc.id);
          newMarkedDates[formattedDate].dots.push(marker);
        }
      });
      
      setMarkedDates((prevMarkedDates) => ({ ...prevMarkedDates, ...newMarkedDates }));
    });
  };

  const getMarkerCategory = (category, taskId) => {
    const uniqueKey = category + taskId;
    switch (category) {
      case "Trabajo":
        return { ...trabajo, key: uniqueKey};
      case "Ejercicio":
        return { ...ejercicio, key: uniqueKey};
      case "Compras":
        return {...compras, key: uniqueKey};
      case "Familia":
        return {...familia, key: uniqueKey};
      default:
        return otros;
    }
    
  };
 

  return (
    <View style={styles.container}>
      <CalendarList
        theme={styles.theme}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markingType={"multi-dot"}
        markedDates={markedDates}
        disableMonthChange={false}
        pastScrollRange={50}
        futureScrollRange={50}
        firstDay={1}
      />
    </View>
  );
  }


export default Calendar;