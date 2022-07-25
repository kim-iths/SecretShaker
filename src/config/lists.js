import { icons, ingredients } from "./images" 

export const listIngredients = [
    //Alcohols
    {name: "Champagne", image: icons.close},
    {name: "Vodka", image: icons.close},
    {name: "Bitters", image: icons.close},
    {name: "Gin", image: icons.close},
    {name: "Light rum", image: icons.close},
    {name: "Tequila", image: icons.close},
    {name: "Bourbon", image: icons.close},
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
    {name: "Ginger ale", image: icons.close},
    {name: "Soda water", image: icons.close},
    {name: "Tonic water", image: icons.close},
    //Dairy products
    {name: "Milk", image: icons.close},
    {name: "Cream", image: icons.close},
    {name: "Egg", image: icons.close, inferred: ["Egg white", "Egg yolk"]},
    {name: "Vanilla ice-cream", image: icons.close},
    {name: "Chocolate ice-cream", image: icons.close},
    //Plants
    {name: "Mint", image: icons.close},
    {name: "Basil", image: icons.close},
    //Spices
    {name: "Sugar", image: icons.close},
    {name: "Salt", image: icons.close},
    {name: "Vanilla extract", image: icons.close},
    //Others
    {name: "Sugar syrup", image: icons.close},
    {name: "Coffee", image: icons.close},
]

export const listGlassTypes = [

]

export const listAlcohols = [

]