import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'

const IngredientCard = ({ text, image, onPress }) => {

  const [itemWidth, setItemWidth] = useState(null)
  return (
    <TouchableOpacity style={[styles.container, { height: itemWidth ? itemWidth : null }]} activeOpacity={0.6}
      onLayout={(e) => {
        setItemWidth(e.nativeEvent.layout.width)
      }}
      onPress={onPress}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={{ flex: 1, justifyContent: "center", }}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default IngredientCard