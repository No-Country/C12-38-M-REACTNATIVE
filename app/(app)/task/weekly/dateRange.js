import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

const DateRange = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Función para obtener el rango de fechas (próximos 7 días)
  const getWeekRange = () => {
    const currentDate = new Date()
    const startDay = currentDate.getDate()
    const startMonth = currentDate.getMonth()
    const startYear = currentDate.getFullYear()

    const endDate = new Date(startYear, startMonth, startDay + 6)
    const endDay = endDate.getDate()
    const endMonth = endDate.getMonth()

    return `${startDay} de ${getMonthName(startMonth)} al ${endDay} de ${getMonthName(endMonth)}`
  }

  // Función para obtener el nombre del mes
  const getMonthName = (month) => {
    const months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ]
    return months[month]
  }

  // Actualizar la fecha automáticamente al montar el componente
  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return <Text style={styles.rangeText}>{getWeekRange()}</Text>
}

const styles = StyleSheet.create({
  rangeText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5
  }
})

export default DateRange
