import React from 'react'
import { Image, ImageBackground, Text } from 'react-native'
import { View } from 'react-native'
import MainMenuCard from '../../components/MainMenuCard/MainMenuCard'
import { icons, images } from '../../config/images'
import { colors } from '../../config/theme'
import { styles } from './styles'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={images.homescreenBackground}
                style={styles.imageBackground}>
                <Text style={styles.title}>Secret Shaker</Text>
                <View style={styles.mainMenuContainer}>
                    <MainMenuCard icon={icons.drink} title="Regular mode" description="Choose ingredients you have at home, then shake your phone to get a recipe!"
                    onPress={()=>navigation.navigate("IngredientsScreen")} />
                    <MainMenuCard icon={icons.drink} title="Daredevil mode" color={colors.DARK_RED} description={"Same as regular, but you have to include at least one \"gross\" ingredient (e.g. hot sauce, ketchup) that might be included in a recipe!"} />
                    <View style={{ flex: 1 }} />
                    <MainMenuCard icon={icons.settings} title="Settings" />
                    <MainMenuCard icon={icons.info} title="About" />
                </View>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen
