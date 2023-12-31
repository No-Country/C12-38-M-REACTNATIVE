import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const DropdownCategories = ({ setCategory }) => {
  const data = [
    { key: 'Pendiente', value: 'Pendiente' },
    { key: 'Familia', value: 'Familia' },
    { key: 'Trabajo', value: 'Trabajo' },
    { key: 'Ejercicio', value: 'Ejercicio' },
    { key: 'Compras', value: 'Compras' },
    { key: 'Otro', value: 'Otro' }
  ]

  return (
    <SelectList
      setSelected={setCategory}
      data={data}
      save='value'
      placeholder='Categoria'
      search={false}
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
        marginTop: 25
      }}
      dropdownStyles={{
        borderColor: '#D9D9D9',
        borderWidth: 2,
        borderRadius: 12,
        fontSize: 14,
        fontWeight: '400',
        backgroundColor: '#FFFFFF',
        paddingStart: 16,
        paddingEnd: 16
      }}
      inputStyles={{
        color: '#B7B7B7'
      }}
    />
  )
}

export default DropdownCategories
