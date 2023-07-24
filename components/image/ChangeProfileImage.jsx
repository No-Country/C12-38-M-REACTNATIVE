import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


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

  const [image, setImage] = useState(null);

  const buttonCamera = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } 
  };

  return (
    <View>
      {!image ? 
      <Pressable onPress={buttonCamera} >
        <Image source={imageSource} style={styles.image} />
        <Ionicons style={styles.iconCamera} name='camera' size={60} color='#B7B7B7' />
      </Pressable> :
      <Pressable onPress={buttonCamera} >
        <Image source={{ uri: image }} style={styles.image} />
        <Ionicons style={styles.iconCamera} name='camera' size={60} color='#B7B7B7' />
      </Pressable>}
    </View>
  )
}

export default ChangeProfileImage