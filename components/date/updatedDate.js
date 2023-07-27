import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

const UpdatedDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  // Función para obtener la fecha actual
  const getFormattedDate = () => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
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
    const dayOfWeek = days[currentDate.getDay()]
    const month = months[currentDate.getMonth()]
    const dayOfMonth = currentDate.getDate()
    const year = currentDate.getFullYear()

    return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10
  }
})

export default UpdatedDate
