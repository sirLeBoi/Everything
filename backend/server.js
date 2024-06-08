const express = require('express');
const mongoose = require('mongoose');
const Cocktail = require('./models/CocktailModel');
const app = express();

app.use(express.json());



//get all cocktails
app.get('/cocktail', async(req, res) => {
    try{
        const cocktails =  await Cocktail.find({});
        res.status(200).json(cocktails); 

    } catch (error){
        console.log(error.message);
        res.status(500).json({error: error.message});
    }
});

//get a cocktail by name
app.get('/cocktail/:name', async(req, res) => {
    try{
        const {name} = req.params;
        const cocktail =  await Cocktail.findOne({name:name});
        res.status(200).json(cocktail);

    } catch (error){
        console.log(error.message);
        res.status(500).json({error: error.message});
    }
});

//update a cocktail
app.put('/cocktail/:name', async(req, res) => {
    try{
        const {name} = req.params;
        const cocktail = await Cocktail.findOneAndUpdate({ name: name }, req.body, { new: true });
        if(!Cocktail) res.status(404).json({message: 'Cocktail not found'});
        const updateCocktail = await Cocktail.findOne({name:name});
        res.status(200).json(updateCocktail);
    } catch (error){
        console.log(error.message);
        res.status(500).json({error: error.message});
    }
});

//create a cocktail
app.post('/cocktail', async(req, res) => {
    try{
        const cocktail =  await Cocktail.create(req.body);
        res.status(200).json(cocktail); 

    } catch (error){
        console.log(error.message);
        res.status(500).json({error: error.message});
    }
});

//delete a cocktail
app.delete('/cocktail/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const cocktail = await Cocktail.findOneAndDelete({ name: name });
        if (!cocktail) {
            return res.status(404).json({ message: 'Cocktail not found' });
        }
        res.status(200).json({ message: 'Cocktail deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});

// Database connection
mongoose.
connect("mongodb+srv://admin:yuvalop1@cluster0.uweoemo.mongodb.net/Node-api?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}).catch(() => {
    console.log(error);
});