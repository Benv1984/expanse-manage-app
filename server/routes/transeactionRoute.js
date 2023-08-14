const express = require("express")
const { addTranseaction, getAllTranseaction } = require("../controllers/transeactionController")


//router object
const router = express.Router()

//routers
//add transeaction POST method
router.post('/add-transeaction', addTranseaction)

//get tanseaction GET method
router.post('/get-all-transeactions', getAllTranseaction)

module.exports = router