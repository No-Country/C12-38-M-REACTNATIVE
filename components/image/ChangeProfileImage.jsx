/* eslint-disable multiline-ternary */
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useRouter } from 'expo-router'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { useAuth } from '../../hooks'
import { uploadImageAsync } from '../../services/storage/images.service'

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    borderRadius: 90
  },
  iconCamera: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 138,
    alignSelf: 'flex-end'
  }
})

const imageSource = require('../../assets/images/image-icon.png')

function ChangeProfileImage() {
  const { replace } = useRouter()
  const { user, updateProfileImage } = useAuth()

  const buttonCamera = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      const imageURI = result.assets[0].uri
      const imageURL = await uploadImageAsync('users/images', imageURI)
      await updateProfileImage(imageURL)
      replace('/')
    }
  }

  return (
    <View>
      {!user?.photoURL ? (
        <Pressable onPress={buttonCamera}>
          <Image source={imageSource} style={styles.image} />
          <Ionicons style={styles.iconCamera} name='camera' size={60} color='#B7B7B7' />
        </Pressable>
      ) : (
        <Pressable onPress={buttonCamera}>
          <Image source={{ uri: user?.photoURL }} style={styles.image} />
          <Ionicons style={styles.iconCamera} name='camera' size={60} color='#B7B7B7' />
        </Pressable>
      )}
    </View>
  )
}

export default ChangeProfileImage
