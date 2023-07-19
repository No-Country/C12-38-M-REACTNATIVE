import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center'
 },
 containerMonth: {
  justifyContent: 'center',
  width: 321,
  height: 52,
  backgroundColor: '#D9D9D9',
  borderRadius: 5
 },
 textMonth: {
  textAlign: 'center',
  fontSize: 19,
  lineHeight: 30,
  fontWeight: '400',
 },
 arrowLeft: {
  fontSize: 19,
  color: '#000',
  fontWeight: '400',
  lineHeight: 30,
  position: 'absolute',
  alignSelf: 'flex-start',
  left: 11
 },
 arrowRight: {
  fontSize: 19,
  color: '#000',
  fontWeight: '400',
  lineHeight: 30,
  position: 'absolute',
  alignSelf: 'flex-end',
  right: 11
 },
 containerDaysWeek:{
  flexDirection: 'row',
  marginTop: 52,
  columnGap: .95,
  marginBottom: 3.96
 },
 daysWeek: {
  width: 48,
  height: 25,
  backgroundColor: '#D9D9D9',
  textAlign: 'center',
  borderRadius: 5,
  fontSize: 12,
  lineHeight: 30,
  fontWeight: '400'
  },
  containerNumbers: {
    flexDirection: 'row',
    marginTop: 40
    
  },
  numbers: {
    marginTop: 1,
    marginHorizontal: .95,
    backgroundColor: '#d9d9d9',
    width: 47.47,
    height: 49.47,
    borderRadius: 5
  }
})

function Calendar() {
  const [numbersDay, setNumbersDay] = useState([
    {number: ' ', key: '1'}, {number: ' ', key: '2'}, {number: ' ', key: '3'}, 
    {number: ' ', key: '4'}, {number: ' ', key: '5'}, {number: ' ', key: '6'},
    {number: ' ', key: '7'}, {number: ' ', key: '8'}, {number: ' ', key: '9'},
    {number: ' ', key: '10'}, {number: ' ', key: '11'}, {number: ' ', key: '12'},
    {number: ' ', key: '13'}, {number: ' ', key: '14'}, {number: ' ', key: '15'},
    {number: ' ', key: '16'}, {number: ' ', key: '17'}, {number: ' ', key: '18'},
    {number: ' ', key: '19'}, {number: ' ', key: '20'}, {number: ' ', key: '21'},
    {number: ' ', key: '22'}, {number: ' ', key: '23'}, {number: ' ', key: '24'},
    {number: ' ', key: '25'}, {number: ' ', key: '26'}, {number: ' ', key: '27'},
    {number: ' ', key: '28'}
  ]);

  return (
     <View style={styles.container}>
      <View style={styles.containerMonth}>
        <AntDesign name="left" style={styles.arrowLeft} />
        <Text style={styles.textMonth}>mes 2023</Text>
        <AntDesign name="right" style={styles.arrowRight} />
      </View>
      <View style={styles.containerDaysWeek}>
        <Text style={styles.daysWeek}>L</Text>
        <Text style={styles.daysWeek}>M</Text>
        <Text style={styles.daysWeek}>M</Text>
        <Text style={styles.daysWeek}>J</Text>
        <Text style={styles.daysWeek}>V</Text>
        <Text style={styles.daysWeek}>S</Text>
        <Text style={styles.daysWeek}>D</Text>
      </View>
      <FlatList 
        numColumns={7}
        data={numbersDay}
        renderItem={({item}) => (
          <Text style={styles.numbers}>{item.number}</Text>
        )}
      />
     </View>
    )
 };



export default Calendar;
