import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const splashScreen = () => {
    return (
        <View style={styles.container} >
            <LinearGradient 
                colors={['transparent', '#ffffff', '#7141FA', 'transparent']}
                start={{ x: 0.5, y: 0  }}
                end={{ x: 0.5, y: 1 }} 
                style={styles.gradient}>
                <Image>

                </Image>
                <Text>

                </Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
      },
    logo: {

    },
    
})