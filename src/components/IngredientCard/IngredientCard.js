import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { forwardRef, memo, PureComponent, useState } from 'react'
import { styles } from './styles'
import { icons } from '../../config/images'

const IngredientCard = (props) => {
  const { text, image, onPress, isSelected } = props
  const [itemWidth, setItemWidth] = useState(null)

  return (
    <TouchableOpacity style={[styles.container, { height: itemWidth ? itemWidth : null, },
    isSelected ? { transform: [{ scale: 0.8 }] } : null
    ]}
      activeOpacity={0.6}
      onLayout={(e) => {
        setItemWidth(e.nativeEvent.layout.width)
      }}
      onPress={() => onPress()}
    >
      {/* {console.log("Rendy " + text)} */}
      <View style={{ flex: 1, }}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", }}>
        <Text style={styles.text}>{text}</Text>
      </View>
      {isSelected ?
        <Image source={icons.check} style={styles.check} />
        : null
      }
    </TouchableOpacity>
  )
}

const areEqual = (prevProps, nextProps) => {
  const { isSelected } = nextProps;
  const { isSelected: prevIsSelected } = prevProps;
  const { text } = nextProps
  const { text: prevText } = prevProps

  const isSelectedEqual = (isSelected === prevIsSelected)

  return isSelectedEqual;
};

export default React.memo(IngredientCard, areEqual)
// export default React.memo(IngredientCard)
// export default IngredientCard