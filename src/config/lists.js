import { icons, ingredients } from "./images" 

export const listIngredients = [
    //Basics (should always be included in a search)
    {name: "Ice", image: icons.close},
    {name: "Water", image: icons.close},
    //Alcohols
    {name: "Champagne", image: icons.close},
    {name: "Vodka", image: icons.close},
    {name: "Bitters", image: icons.close, inferred: ["Angostura bitters"]},
    {name: "Gin", image: icons.close},
    {name: "Light rum", image: icons.close},
    {name: "Tequila", image: icons.close},
    {name: "Bourbon", image: icons.close},
    {name: "Triple sec", image: icons.close},
    {name: "Irish cream", image: icons.close, inferred: ["Baileys irish cream"]},
    {name: "Coffee liqeur", image: icons.close, inferred: ["Kahlua"]},
    {name: "Dry vermouth", image: icons.close, inferred: ["Vermouth"]},
    {name: "Sweet vermouth", image: icons.close, inferred: ["Vermouth"]},
    {name: "Whiskey", image: icons.close, inferred: ["Rye whiskey", "Blended whiskey", "Whisky"]},
    //Fruits/citrus
    {name: "Lime", image: ingredients.lime, inferred: ["Lime juice", "Lime peel"]},
    {name: "Lemon", image: ingredients.lemon, inferred: ["Lemon juice", "Lemon peel"]},
    {name: "Orange", image: ingredients.lemon, inferred: ["Orange juice", "Orange peel"]},
    //Juices
    {name: "Apple juice", image: icons.close},
    {name: "Orange juice", image: icons.close},
    {name: "Pineapple juice", image: icons.close},
    {name: "Cranberry juice", image: icons.close},
    {name: "Tomato Juice", image: icons.close},
    //Carbonated
    {name: "Cola", image: icons.close},
    {name: "Orange soda", image: icons.close},
    {name: "Lemon/Lime soda", image: icons.close, inferred: ["7-up", "Sprite"]},
    {name: "Ginger ale", image: icons.close},
    {name: "Soda water", image: icons.close, inferred: ["Carbonated water"]},
    {name: "Tonic water", image: icons.close},
    //Dairy products
    {name: "Milk", image: icons.close},
    {name: "Cream", image: icons.close, inferred: ["Light cream"]},
    {name: "Egg", image: icons.close, inferred: ["Egg white", "Egg yolk"]},
    {name: "Vanilla ice-cream", image: icons.close},
    {name: "Chocolate ice-cream", image: icons.close},
    //Plants, vegetables and fruits
    {name: "Mint", image: icons.close},
    {name: "Basil", image: icons.close},
    {name: "Strawberries", image: icons.close},
    {name: "Blackberries", image: icons.close},
    {name: "Cherries", image: icons.close, inferred: ["Cherry"]},
    //Spices
    {name: "Sugar", image: icons.close},
    {name: "Powdered Sugar", image: icons.close},
    {name: "Salt", image: icons.close},
    {name: "Vanilla extract", image: icons.close},
    //Others
    {name: "Sugar syrup", image: icons.close},
    {name: "Coffee", image: icons.close},
    {name: "Grenadine", image: icons.close},
]

export const listGlassTypes = [

]

export const listAlcohols = [

]