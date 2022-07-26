import { View, Text, FlatList, ScrollView, TouchableOpacity, Modal, Pressable, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from './styles'
import SelectedIngredientCard from '../../components/SelectedIngredientCard/SelectedIngredientCard'
import IngredientCard, { MemoIngredientCard } from '../../components/IngredientCard/IngredientCard'
import { listIngredients } from '../../config/lists'
import { colors } from '../../config/theme'
import drinks from '../../config/drinks.json'
import { icons, images } from '../../config/images'

const IngredientsScreen = ({ isDareMode }) => {

    const [selectedIngredients, setSelectedIngredients] = useState([])
    const [availableDrinks, setAvailableDrinks] = useState(0)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setAvailableDrinks(getCompatibleDrinks().length)
    }, [selectedIngredients])

    const getCompatibleDrinks = () => {
        let compatibleDrinks = []

        drinks.drinks.forEach(d => {
            let amountIngredients = 0
            let amountCorrectIngredients = 0
            for (let i = 1; i < 15; i++) {

                if (d[`strIngredient${i}`] == null) { break } else amountIngredients++

                selectedIngredients.forEach(sel => {
                    const checkIngredient = (ing) => {
                        if (d[`strIngredient${i}`].toLowerCase() == ing.toLowerCase()) {
                            amountCorrectIngredients++
                        }
                    }

                    checkIngredient(sel.name)

                    //Checks again if ingredient n has inferred ingredients
                    sel.inferred.forEach(inf => {
                        checkIngredient(inf)
                    })
                })
            }

            if (amountIngredients == amountCorrectIngredients) compatibleDrinks.push(d)
        })
        return compatibleDrinks
    }

    const renderItemSelected = ({ item, index }) => {
        const { name, inferred } = item

        const isLastUneven = index == selectedIngredients.length - 1 && index % 2 == 0

        return (
            <SelectedIngredientCard text={name} isLastUneven={isLastUneven}
                onPress={() => {
                    const newIngredients = [...selectedIngredients]
                    newIngredients.splice(selectedIngredients.findIndex(o => o.name == name), 1)
                    setSelectedIngredients(newIngredients)
                }} />
        )
    }

    const onItemPress = (item) => {
        const { name, image, inferred = [] } = item

        const newIngredients = [...selectedIngredients]

        const isSelectedAtIndex = selectedIngredients.findIndex(o => o.name == name)
        if (isSelectedAtIndex != -1) {
            newIngredients.splice(isSelectedAtIndex, 1)
        } else {
            let ing = { name: name, inferred: [...inferred] }

            newIngredients.push(ing)
        }

        setSelectedIngredients(newIngredients)
    }
    const renderItem = ({ item, index }) => {

        const { name, image, inferred = [], } = item
        const isSelected = selectedIngredients.findIndex(o => o.name == name) != -1

        return (
            <IngredientCard text={name} image={image}
                isSelected={isSelected}
                onPress={() => onItemPress(item)}
            />
        )
    }

    const drinkModal = () => {

        const compatibleDrinks = getCompatibleDrinks()
        const chosenDrink = compatibleDrinks[Math.floor(Math.random() * compatibleDrinks.length)]

        return (
            <Modal visible={showModal}
                animationType="fade"
                transparent={true}>

                <View style={styles.modalBackground} />

                <View style={styles.modalContainer}>
                    
                    <View>
                        <Pressable
                            onPress={() => setShowModal(false)}>
                            <Image source={icons.close} style={{
                                height: 32, width: 32,
                                top: 0, right: 0, position: "absolute",
                            }} />
                        </Pressable>
                    </View>

                    <View>
                        <Text
                            style={{
                                textAlign: "center", fontSize: 20, fontWeight: "bold",
                                marginBottom: 16
                            }}
                        >You got:</Text>
                        <Image
                            style={{ width: '100%', flexGrow: 1, borderRadius: 999, 
                        aspectRatio:1}}
                            source={{ uri: chosenDrink.strDrinkThumb }} />
                        <Text
                            style={{
                                textAlign: "center", fontSize: 32, fontWeight: "bold",
                                marginTop: 16
                            }}
                        >{chosenDrink.strDrink}</Text>
                    </View>
                    <View />
                </View>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={<View>
                    <View style={styles.readyContainer}>
                        <Text style={[styles.readyTitle,
                        { color: availableDrinks > 0 ? colors.DARK_GREEN : colors.DARK_RED }]}>
                            {selectedIngredients.length >= 3 && availableDrinks > 0
                                ? `Ready - ${availableDrinks} drinks available` : "Not Ready"}
                        </Text>
                        <Text style={styles.readyDescription}>
                            {selectedIngredients.length >= 3
                                ? (availableDrinks > 0
                                    ? "Shake your phone to get a random recipe!"
                                    : "No drinks available, add more ingredients!")
                                : "Choose at least three ingredients to continue."}

                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                // const compatibleDrinks = getCompatibleDrinks()
                                // console.log(compatibleDrinks.length);
                                setShowModal(true)
                            }}>
                            <Text style={{
                                flex: 1, backgroundColor: "green",
                                marginTop: 8, borderRadius: 8,
                                padding: 8, color: "white"
                            }}>
                                Fetch
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "white", marginVertical: 16, fontSize: 16 }}>
                        {`Selected ingredients (${selectedIngredients.length}/10)`}
                    </Text>
                    <FlatList
                        numColumns={2}
                        data={selectedIngredients}
                        renderItem={renderItemSelected}
                        keyExtractor={(item, index) => index}
                        ListEmptyComponent={<View>
                            <Text style={{ color: "#c0c0c0", marginLeft: 8 }}>No ingredients selected</Text>
                        </View>}
                    />
                    <Text style={{ color: "white", marginVertical: 16, fontSize: 16 }}>Choose ingredients</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setSelectedIngredients(listIngredients.map(i => {
                                const { name, inferred = [] } = i
                                return { name: name, inferred: [...inferred] }
                            }))
                        }}
                    >
                        <Text style={{
                            flex: 1, backgroundColor: "green",
                            marginTop: 8, borderRadius: 8,
                            padding: 8, color: "white"
                        }}>Select all</Text>
                    </TouchableOpacity>
                </View>}
                style={{ padding: 16, }}
                contentContainerStyle={{ paddingBottom: 32, }}
                numColumns={3}
                data={listIngredients}
                renderItem={renderItem}
                keyExtractor={item => item.name}

            />
            {showModal ? drinkModal() : null}
        </View >
    )
}

export default IngredientsScreen