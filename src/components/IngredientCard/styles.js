import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        alignItems:"center",
        margin: 4,
        paddingVertical:8,
        paddingHorizontal:8,
        borderRadius:8,
        // justifyContent:"space-between"
        // justifyContent:"center"
    },
    image: {
        height:40,
        width:40,
        resizeMode:"contain",
    },
    text: {
        textAlign:"center",
        fontSize: 16,
    },
})