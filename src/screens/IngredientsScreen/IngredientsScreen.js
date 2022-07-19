import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import SelectedIngredientCard from '../../components/SelectedIngredientCard/SelectedIngredientCard'
import { icons, ingredients } from '../../config/images'
import IngredientCard from '../../components/IngredientCard/IngredientCard'
import { listIngredients } from '../../config/lists'

const IngredientsScreen = ({ isDareMode }) => {

    const [selectedIngredients, setSelectedIngredients] = useState([])

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
        { text: "Lime", image: ingredients.lime },
        { text: "Lemon", image: ingredients.lemon },
        { text: "Lime", image: ingredients.lime },
        { text: "Lemon", image: ingredients.lemon },
        { text: "Lime", image: ingredients.lime },
        { text: "Lemon", image: ingredients.lemon },
        { text: "Lime", image: ingredients.lime },
        { text: "Lemon", image: ingredients.lemon },
        { text: "Lime", image: ingredients.lime },
        { text: "Lemon", image: ingredients.lemon },
        { text: "Lime", image: ingredients.lime },
        { text: "Lemon", image: ingredients.lemon },
        { text: "Lime", image: ingredients.lime },
        { text: "Lemon", image: ingredients.lemon },
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
            <IngredientCard text={item.name} image={item.image} onPress={() => { }} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={<View>
                    <Text style={{ color: "white", marginBottom: 16, fontSize: 16 }}>Selected ingredients (9/10)</Text>
                    <FlatList
                        numColumns={2}
                        data={mockSelectedIngredients}
                        renderItem={renderItemSelected}
                        keyExtractor={(item, index) => index}
                    />
                    <Text style={{ color: "white", marginVertical: 16, fontSize: 16 }}>Choose ingredients</Text>

                </View>}
                style={{padding:16}}
                contentContainerStyle={{ paddingBottom: 32 }}
                numColumns={3}
                data={listIngredients}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default IngredientsScreen