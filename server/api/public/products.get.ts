import { sql } from "~/server/plugins/database"
import * as tPublic from "~/types/public"

export default eventHandler(async (event) => {
	const data = JSON.parse(dummyData) as tPublic.Product[]
	return data
})

const dummyData = `
[{
  "id": 1,
  "name": "Bagelers - Cinn / Brown",
  "price": 52.37
}, {
  "id": 2,
  "name": "Rice - Sushi",
  "price": 26.4
}, {
  "id": 3,
  "name": "Salmon - Atlantic, No Skin",
  "price": 30.33
}, {
  "id": 4,
  "name": "Vodka - Smirnoff",
  "price": 57.59
}, {
  "id": 5,
  "name": "Pasta - Bauletti, Chicken White",
  "price": 58.68
}, {
  "id": 6,
  "name": "Sauce - Soy Low Sodium - 3.87l",
  "price": 58.03
}, {
  "id": 7,
  "name": "Island Oasis - Raspberry",
  "price": 31.68
}, {
  "id": 8,
  "name": "Beef - Striploin Aa",
  "price": 69.24
}, {
  "id": 9,
  "name": "Taro Leaves",
  "price": 73.52
}, {
  "id": 10,
  "name": "Peas - Pigeon, Dry",
  "price": 87.86
}, {
  "id": 11,
  "name": "Beer - Fruli",
  "price": 16.6
}, {
  "id": 12,
  "name": "Iced Tea - Lemon, 340ml",
  "price": 65.42
}, {
  "id": 13,
  "name": "Ginger - Ground",
  "price": 26.03
}, {
  "id": 14,
  "name": "Pork - Loin, Boneless",
  "price": 48.82
}, {
  "id": 15,
  "name": "Mussels - Frozen",
  "price": 34.07
}, {
  "id": 16,
  "name": "Shrimp - Black Tiger 13/15",
  "price": 38.88
}, {
  "id": 17,
  "name": "Calypso - Lemonade",
  "price": 9.1
}, {
  "id": 18,
  "name": "Beans - Turtle, Black, Dry",
  "price": 44.28
}, {
  "id": 19,
  "name": "Brownies - Two Bite, Chocolate",
  "price": 24.75
}, {
  "id": 20,
  "name": "Soup - Campbells, Chix Gumbo",
  "price": 46.5
}, {
  "id": 21,
  "name": "Wine - Cousino Macul Antiguas",
  "price": 93.89
}, {
  "id": 22,
  "name": "Bar Mix - Lemon",
  "price": 57.54
}, {
  "id": 23,
  "name": "Chocolate - Feathers",
  "price": 39.84
}, {
  "id": 24,
  "name": "Pork - Chop, Frenched",
  "price": 45.64
}, {
  "id": 25,
  "name": "Wine - Zinfandel Rosenblum",
  "price": 86.39
}, {
  "id": 26,
  "name": "Iced Tea Concentrate",
  "price": 97.71
}, {
  "id": 27,
  "name": "Carbonated Water - Wildberry",
  "price": 84.9
}, {
  "id": 28,
  "name": "Spoon - Soup, Plastic",
  "price": 68.17
}, {
  "id": 29,
  "name": "Raspberries - Fresh",
  "price": 64.76
}, {
  "id": 30,
  "name": "Bread Base - Goodhearth",
  "price": 69.2
}, {
  "id": 31,
  "name": "Goldschalger",
  "price": 48.91
}, {
  "id": 32,
  "name": "Swiss Chard - Red",
  "price": 77.2
}, {
  "id": 33,
  "name": "Bread - Sour Sticks With Onion",
  "price": 39.86
}, {
  "id": 34,
  "name": "Nantucket - Pomegranate Pear",
  "price": 55.79
}, {
  "id": 35,
  "name": "Appetizer - Mini Egg Roll, Shrimp",
  "price": 28.73
}, {
  "id": 36,
  "name": "Peas - Frozen",
  "price": 76.94
}, {
  "id": 37,
  "name": "Muffin Chocolate Individual Wrap",
  "price": 84.5
}, {
  "id": 38,
  "name": "Hersey Shakes",
  "price": 57.26
}, {
  "id": 39,
  "name": "Island Oasis - Ice Cream Mix",
  "price": 78.04
}, {
  "id": 40,
  "name": "Lentils - Green, Dry",
  "price": 28.41
}, {
  "id": 41,
  "name": "Foam Tray S2",
  "price": 49.65
}, {
  "id": 42,
  "name": "Quinoa",
  "price": 34.35
}, {
  "id": 43,
  "name": "Wine - Pinot Noir Mondavi Coastal",
  "price": 70.61
}, {
  "id": 44,
  "name": "Garbage Bag - Clear",
  "price": 58.08
}, {
  "id": 45,
  "name": "Chicken - Leg, Fresh",
  "price": 68.92
}, {
  "id": 46,
  "name": "Flower - Carnations",
  "price": 51.34
}, {
  "id": 47,
  "name": "Steampan Lid",
  "price": 11.37
}, {
  "id": 48,
  "name": "Garbage Bag - Clear",
  "price": 63.63
}, {
  "id": 49,
  "name": "Extract - Vanilla,artificial",
  "price": 30.13
}, {
  "id": 50,
  "name": "Basil - Primerba, Paste",
  "price": 25.29
}]
`
