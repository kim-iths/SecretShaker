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
})