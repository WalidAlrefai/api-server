'use strict';

const express = require('express');
const {foodCollection} = require('../models/index');
const router = express.Router();


// Routes
router.get('/food',getFood);
router.post('/food',createFood);
router.get('/food/:id',getOneFood);
router.put('/food/:id',updateFood);
router.delete('/food/:id',deleteFood)


// localhost:3000/food
async function getFood(req,res) {
    let allFood = await foodCollection.readRecord();
    res.status(200).json(allFood);
}

async function createFood(req,res) {
    let newClothes = req.body;
    let food = await foodCollection.createRecord(newClothes);
    res.status(201).json(food);
}

async function getOneFood(req,res) {
    let id = parseInt(req.params.id);
    let food = await foodCollection.readRecord(id)
    res.json(food);
}

async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let updatedFood = await foodCollection.updateRecord(id,obj);
    res.status(201).json(updatedFood);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    const deletedFood = await foodCollection.deleteRecord(id);
    res.status(204).json(deletedFood);
}

module.exports = router;