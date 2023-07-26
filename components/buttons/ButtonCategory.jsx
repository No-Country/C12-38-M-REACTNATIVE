import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';


const style = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 200,
    backgroundColor: '#4D9DE0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4.5
    },
    elevation: 5,
    shadowOpacity: 0.4,
    shadowRadius: 3.84
  },
  text: {
    color: '#ffff'
  }
})

const ButtonCategory = ({ selectedCategory }) => {
  return (
    <Pressable style={style.button}>
      <Text style={style.text}>{selectedCategory || 'Categoria'}</Text>
    </Pressable>
  )
}

export {ButtonCategory};
