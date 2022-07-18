import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        borderRadius:8,
        paddingHorizontal:12,
        justifyContent:"space-between",
        paddingVertical:4,
        elevation:0,
        flex:1,
        margin:4
    },
    fakeItem: {
        flex: 1,
        paddingHorizontal:12,
        margin:4

    }
})