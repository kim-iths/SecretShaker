import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        // borderRadius: 16,
        padding: 16,
        // marginBottom: 8,
        alignItems: "center",

    },
    icon: {
        height: 32,
        width: 32,
        tintColor: colors.DARK_BLUE,

    },
    textContainer: {
        flex:1,
        paddingHorizontal: 8,
        // alignItems:"center",
    },
    title: {
        fontSize: 20,
        // fontWeight: "bold",
        color: colors.DARK_BLUE,

    },
    description: {
        fontStyle: "italic",
        color: "gray",
    },
})