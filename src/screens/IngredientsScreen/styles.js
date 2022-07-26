import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DARK_BLUE,
    },
    readyContainer: {
        borderRadius: 8,
        padding: 16,
        backgroundColor:"white",
    },
    readyTitle: {
        fontWeight:"bold",
        fontSize:18,
    },
    readyDescription: {

    },
    modalBackground: {
        backgroundColor: "black",
        opacity: 0.5,
        position:"absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
    },
    modalContainer: {
        flex: 1,
        backgroundColor:"white",
        margin: 16,
        padding: 16,
        borderRadius:16,
        justifyContent:"space-between",
    },
    
})