import React from 'react'
import { Image, ImageBackground, Text } from 'react-native'
import { View } from 'react-native'
import { images } from '../../config/images'
import { styles } from './styles'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={images.homescreenBackground}
                style={styles.imageBackground}>
                    <View>
                        
                    </View>
            </ImageBackground>

        </View>
    )
}

export default HomeScreen
