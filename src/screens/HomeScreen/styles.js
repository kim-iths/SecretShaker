import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        height: "100%",
        width: "100%",
        justifyContent:"space-between",
    },
    title: {
        paddingVertical:16,
        textAlign:"center",
        borderRadius:16,
        margin:32,
        color:"white",
        fontSize:36,
        fontWeight:"bold",
        backgroundColor:"#20273FCD",
        
    },
    mainMenuContainer: {
        alignSelf:"stretch",
        margin: 32,
        borderRadius: 16,
        height:"60%",
        backgroundColor: "#20273FCD",
        // backgroundColor: "white",
        padding:16,
    },
})