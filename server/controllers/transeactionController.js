const transeactionModel = require('../models/transaectionModel')

const getAllTranseaction = async (req,res) => {
    try {
        const transeactions = await transeactionModel.find({
            userid:req.body.userid,
        })
        res.status(200).json(transeactions)
    } catch(error) {
        console.log(error)
        res.status(500).json(error) 
    }
}

const addTranseaction = async (req,res) => {
    try {
        const newTranseaction = new transeactionModel(req.body)
        await newTranseaction.save()
        res.status(201).send('Transeaction Created Successfuly')
    } catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {getAllTranseaction, addTranseaction}