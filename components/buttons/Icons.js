import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import DateRange from '../../app/(app)/task/weekly/dateRange'
import TodayDate from '../date/todayDate'

export function WeekButton({ text, leftIcon, rightIcon, onPressLeft, onPressRight }) {
  return (
    <TouchableOpacity style={styles.day} disabled>
      <Text style={styles.textDay}>
        <DateRange />
      </Text>
    </TouchableOpacity>
  )
}

export function DayIcon({ text }) {
  return (
    <TouchableOpacity style={styles.day}>
      <TodayDate />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    marginVertical: 35,
    marginRight: 30,
    marginLeft: 30,
    padding: 15
  },

  text: {
    color: '#0a0a0a',
    fontWeight: '500',
    fontSize: 19
  },

  day: {
    alignItems: 'center',
    backgroundColor: '#7141FA',
    marginVertical: 35,
    marginHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 10,
    elevation: 30
  },

  textDay: {
    color: 'white',
    fontWeight: '400',
    fontSize: 19
  }
})
