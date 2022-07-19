import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        alignItems:"center",
        margin: 4,
        paddingVertical:16,
        paddingHorizontal:8,
        borderRadius:8,
    },
    image: {
        height:48,
        width:48,
        resizeMode:"contain",
    },
    text: {
        textAlign:"center",
        fontSize: 16,
    },
    check: {
        position:"absolute",
        tintColor:colors.DARK_GREEN,
        top: 8,
        right: 8,
        height: 24,
        width: 24,
    },
})