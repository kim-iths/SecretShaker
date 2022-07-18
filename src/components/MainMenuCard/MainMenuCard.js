import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { colors } from '../../config/theme'

const MainMenuCard = ({ icon, title, description, color, onPress }) => {
    return (
        <View style={{ borderRadius: 16, backgroundColor: "white", marginBottom: 8 }}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(null, true)}
                onPress={onPress}
            >
                <View style={[styles.container, { padding: description ? 16 : 8 }]} pointerEvents="box-only">

                    <Image source={icon} style={[styles.icon, { tintColor: color ? color : colors.DARK_BLUE }]} />
                    <View style={[styles.textContainer, { marginLeft: description ? 8 : null }]}>
                        <Text style={[styles.title, {
                            color: color ? color : colors.DARK_BLUE,
                            fontWeight: description ? "bold" : null,
                            fontSize: description ? 20 : 16
                        }]}>{title}</Text>
                        {description ?
                            <Text style={[styles.description]}>{description}</Text>
                            : null}
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default MainMenuCard