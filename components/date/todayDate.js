import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

const TodayDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Función para obtener la fecha actual
  const getFormattedDate = () => {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ]
    const month = months[currentDate.getMonth()]
    const dayOfMonth = currentDate.getDate()

    return `${dayOfMonth} de ${month}`
  }

  // Actualizar la fecha automáticamente al montar el componente
  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return <Text style={styles.dateText}>{getFormattedDate()}</Text>
}

const styles = StyleSheet.create({
  dateText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 19
  }
})

export default TodayDate
