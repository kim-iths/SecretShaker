import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../../config/images'
import { styles } from './styles'

const SelectedIngredientCard = ({ text, onPress, isLastUneven }) => {
    return (
        <View style={{flex: 1, flexDirection:"row"}}>

            <TouchableOpacity
                style={[styles.container]}
                onPress={onPress}>

                <Text>{text}</Text>
                <Image source={icons.close} style={{ height: 24, width: 24 }} />

            </TouchableOpacity >
            {isLastUneven
                ? <View style={styles.fakeItem}/>
                : null}
        </View>
    )
}

export default SelectedIngredientCard