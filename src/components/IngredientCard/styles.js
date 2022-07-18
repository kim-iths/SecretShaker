import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        alignItems:"center",
        margin: 4,
        padding:16,
        borderRadius:8,
        justifyContent:"center"
    },
    image: {
        height:40,
        width:40,
    },
    text: {
        marginTop:12,
        fontSize: 16,
    },
})