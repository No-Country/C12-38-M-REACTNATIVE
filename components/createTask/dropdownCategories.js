import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

const DropdownCategories = ({setCategory}) => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'familia', value:'Familia'},
      {key:'trabajo', value:'Trabajo'},
      {key:'ejercicio', value:'Ejercicio'},
      {key:'compras', value:'Compras'},
      {key:'otro', value:'Otros'}
  ]

  return(
    <SelectList 
        setSelected={setCategory} 
        data={data} 
        save="value"
        boxStyles={{
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
            marginTop: 25,
            // marginBottom: -5,
        }}
        dropdownStyles={{
            borderColor: '#D9D9D9',
            borderWidth: 2,
            borderRadius: 12,
            fontSize: 14,
            fontWeight: '400',
            backgroundColor: '#FFFFFF',
            paddingStart: 16,
            // paddingTop: 8,
            paddingEnd: 16,
            // paddingBottom: 8,
        }}
        inputStyles={{
            color: '#B7B7B7',
            placeholder: 'Categoría'
        }}
    />
  )

};

export default DropdownCategories;
