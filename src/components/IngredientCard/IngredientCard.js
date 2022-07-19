import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { forwardRef, useState } from 'react'
import { styles } from './styles'
import { icons } from '../../config/images'

const IngredientCard = ({ text, image, onPress }) => {

  const [selected, setSelected] = useState(false)

  const [itemWidth, setItemWidth] = useState(null)
  return (
    <TouchableOpacity style={[styles.container, { height: itemWidth ? itemWidth : null, },
    selected ? { transform: [{ scale: 0.8 }] } : null
    ]}
      activeOpacity={0.6}
      onLayout={(e) => {
        setItemWidth(e.nativeEvent.layout.width)
      }}
      onPress={() => {
        setSelected(!selected)
        onPress()
      }}
    >
      <View style={{ flex: 1,  }}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", }}>
        <Text style={styles.text}>{text}</Text>
      </View>
      {selected ?
        <Image source={icons.check} style={styles.check} />
        : null
      }
    </TouchableOpacity>
  )
}

export default IngredientCard