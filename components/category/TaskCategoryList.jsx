import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TaskCategory from './TaskCategory';


const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16
  }
})

function TaskCategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <View style={styles.list}>
      <TaskCategory
        category='Pendiente'
        iconName='pin'
        color='#16a34a'
        onPress={() => handleCategoryPress('Pendiente')}
        isSelected={selectedCategory === 'Pendiente'}
      />
      <TaskCategory
        category='Trabajo'
        iconName='briefcase'
        color='#2563eb'
        onPress={() => handleCategoryPress('Trabajo')}
        isSelected={selectedCategory === 'Trabajo'}
      />
      <TaskCategory
        category='Ejercicio'
        iconName='man'
        color='#dc2626'
        onPress={() => handleCategoryPress('Ejercicio')}
        isSelected={selectedCategory === 'Ejercicio'}
      />
      <TaskCategory
        category='Compras'
        iconName='shopping-cart'
        color='#ca8a04'
        onPress={() => handleCategoryPress('Compras')}
        isSelected={selectedCategory === 'Compras'}
      />
      <TaskCategory
        category='Familia'
        iconName='users'
        color='#7c3aed'
        onPress={() => handleCategoryPress('Familia')}
        isSelected={selectedCategory === 'Familia'}
      />
      <TaskCategory
        category='Otro'
        iconName='plus'
        color='#db2777'
        onPress={() => handleCategoryPress('Otro')}
        isSelected={selectedCategory === 'Otro'}
      />

    </View>
  )
}

export default TaskCategoryList;

/* <ButtonCategory selectedCategory={selectedCategory} /> */