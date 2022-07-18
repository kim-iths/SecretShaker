import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import SelectedIngredientCard from '../../components/SelectedIngredientCard/SelectedIngredientCard'
import { icons } from '../../config/images'
import IngredientCard from '../../components/IngredientCard/IngredientCard'

const IngredientsScreen = ({ isDareMode }) => {

    const mockSelectedIngredients = [
        "Lemon",
        "Grenadine",
        "Vodka",
        "Bitters",
        "Mint leaves",
        "Whiskey",
        "Lime",
        "Cola",
        "Orange soda",
    ]

    const mockIngredients = [
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
        { text: "Lemon", image: icons.drink },
    ]


    const renderItemSelected = ({ item, index }) => {
        // const isEven = index % 2 == 0
        // console.log(item + " is " + isEven);
        const isLastUneven = index == mockSelectedIngredients.length - 1 && index % 2 == 0

        // if(isEven) console.log(item + " is even")
        console.log(item);
        if (isLastUneven) console.log(item + " is last and uneven")
        return (
            <SelectedIngredientCard text={item} onPress={() => { }} isLastUneven={isLastUneven} />
        )
    }

    const renderItem = ({ item, index }) => {

        return (
            <IngredientCard text={item.text} image={item.image} onPress={() => { }} />
        )
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:16}}>
            <Text style={{ color: "white", marginBottom: 16, fontSize: 16 }}>Selected ingredients (9/10)</Text>
            <FlatList
            contentContainerStyle={{paddingBottom:16}}

                numColumns={2}
                data={mockSelectedIngredients}
                renderItem={renderItemSelected}
                keyExtractor={(item, index) => index}
            />
            <Text style={{ color: "white", marginBottom: 16, fontSize: 16 }}>Choose ingredients</Text>
            <FlatList 
            contentContainerStyle={{paddingBottom:16}}
                numColumns={3}
                data={mockIngredients}
                renderItem={renderItem}
                keyExtractor={(item,index) => index}
            />

        </ScrollView>
    )
}

export default IngredientsScreen