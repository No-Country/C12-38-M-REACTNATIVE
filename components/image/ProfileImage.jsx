import { Image, Pressable } from 'react-native'

const imageSource = require('../../assets/images/profile-image.webp')

function ProfileImage({ onModalOpen }) {
  return (
    <Pressable onPress={onModalOpen} style={{ marginRight: 20, marginVertical: 12 }}>
      <Image source={imageSource} />
    </Pressable>
  )
}

export default ProfileImage
