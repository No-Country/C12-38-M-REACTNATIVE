import { Entypo } from '@expo/vector-icons'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { forwardRef } from 'react'
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native'
import { useSwitch } from '../../hooks'
import SettingBackdrop from './SettingBackdrop'

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 42,
    paddingHorizontal: 36
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#7141FA',
    borderWidth: 3,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    flexGrow: 1
  }
})

const SettingModal = forwardRef(function SettingModal(props, ref) {
  const [enabledSwitch1, toggleSwitch1] = useSwitch()
  const [enabledSwitch2, toggleSwitch2] = useSwitch()

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={['50%', '50%']}
      handleIndicatorStyle={{ backgroundColor: '#7141FA', width: 50, height: 5 }}
      backdropComponent={(props) => <SettingBackdrop {...props} />}
    >
      <View style={styles.modal}>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Cuenta</Text>
          <Entypo name='chevron-right' size={24} color='black' />
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Foto de perfil</Text>
          <Entypo name='chevron-right' size={24} color='black' />
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Notificaciones</Text>
          <Switch
            trackColor={{ false: '#B7B7B7', true: '#7141FA' }}
            thumbColor={enabledSwitch1 ? '#7141FA' : '#ccc'}
            ios_backgroundColor='#7141FA'
            onChange={toggleSwitch1}
            value={enabledSwitch1}
          />
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Modo oscuro</Text>
          <Switch
            trackColor={{ false: '#B7B7B7', true: '#7141FA' }}
            thumbColor={enabledSwitch2 ? '#7141FA' : '#B7B7B7'}
            ios_backgroundColor='#7141FA'
            onChange={toggleSwitch2}
            value={enabledSwitch2}
          />
        </Pressable>
      </View>
    </BottomSheetModal>
  )
})

export default SettingModal
