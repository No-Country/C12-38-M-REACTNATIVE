import { Image, Pressable } from 'react-native'
import { useAuth } from '../../hooks'

const imageSource = require('../../assets/images/profile-image.webp')

function ProfileImage({ onModalOpen }) {
  const { user } = useAuth()
  const hasProfileImage = user?.photoURL

  return (
    <Pressable onPress={onModalOpen} style={{ marginRight: 20, marginVertical: 12 }}>
      {!hasProfileImage && <Image source={imageSource} />}
      {hasProfileImage && (
        <Image source={{ uri: hasProfileImage }} style={{ height: 60, width: 60, borderRadius: 100 }} />
      )}
    </Pressable>
  )
}

export default ProfileImage
