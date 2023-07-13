import { Image, Pressable, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create ({
 image: {
  width: 180,
  height: 180,
  borderRadius: 15
 },
 iconCamera: {
  width: 60,
  height: 60,
  position: 'absolute',
  top: 138,
  alignSelf: 'flex-end'
 }
})


const imageSource = require('../../../assets/images/image-icon.png')

function ChangeProfileImage() {
const buttonCamera = {}

  return (
   <View>
    <Image source={imageSource} style={styles.image} />
    <Pressable onPress={buttonCamera} style={styles.iconCamera}>
      <Ionicons name="camera" size={60} color="#B7B7B7" />
    </Pressable>
   </View>
  )
}

export default ChangeProfileImage;
