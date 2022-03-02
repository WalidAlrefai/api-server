'use strict';

const express = require('express');
const {clothesCollection} = require('../models/index');
const router = express.Router();




router.get('/clothes',getClothes);
router.post('/clothes',createClothes);
router.get('/clothes/:id',getOneClothes);
router.put('/clothes/:id',updateClothe);
router.delete('/clothes/:id',deleteClothe)

// localhost:3000/clothes
async function getClothes(req,res) {
    let allClothes = await clothesCollection.readRecord();
    res.status(200).json(allClothes);
}


async function createClothes(req,res) {
    let newClothes = req.body;
    let clothes = await clothesCollection.createRecord(newClothes);
    res.status(201).json(clothes);
}


async function getOneClothes(req,res) {
    let id = parseInt(req.params.id);
    let clothes = await clothesCollection.readRecord(id)
    res.json(clothes);
}

async function updateClothe(req, res) {
    const id = parseInt(req.params.id);
    const obj = req.body;
    let updatedClothe = await clothesCollection.updateRecord(id,obj);
    res.status(201).json(updatedClothe);
}

async function deleteClothe(req, res) {
    const id = parseInt(req.params.id);
    const deletedClothe = await clothesCollection.deleteRecord(id);
    res.status(204).json(deletedClothe);
}


module.exports = router;