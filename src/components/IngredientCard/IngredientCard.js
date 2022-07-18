import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const IngredientCard = ({text, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}
    onPress={onPress}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default IngredientCard