import { Image, Pressable } from 'react-native'

const imageSource = require('../../assets/images/profile-image.webp')

function ProfileImage({ onPress }) {
  return (
    <Pressable onPress={onPress} style={{ marginRight: 20 }}>
      <Image source={imageSource} />
    </Pressable>
  )
}

export default ProfileImage
