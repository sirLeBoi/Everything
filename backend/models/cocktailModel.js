const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter an ingredient name"]
    },
    amount: {
        type: String,
        required: [true, "Please enter the amount of the ingredient"]
    }
}, { _id: false });


const cocktailSchema = mongoose.Schema(
    {
        name: { 
            type: String, 
            required: [true,"Please enter a cocktail name"] 
        },
        ingredients: {
            type: [ingredientSchema],
            required: [true, "Please enter the ingredients"]
        },
        instructions: {
            type: String,
            required: [true, "Please enter the instructions"]
        },
        category: {
            type: String,
            required: [true, "Please enter a category"]
        },
        glass: {
            type: String,
            required: [true, "Please enter a glass type"]
        },
        garnish: {
            type: String,
            required: [true, "Please enter a garnish"]
        },
        image: {
            type: String,
            required: [true, "Please enter an image"]
        }
    },
    {
        timestamps: true
    }
);

const Cocktail = mongoose.model('Product', cocktailSchema);

module.exports = Cocktail;
