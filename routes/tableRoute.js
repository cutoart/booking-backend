const express = require('express')
const Table = require('../models/tableModel')
const {createTable, getTables, updateTable} = require('../controllers/tableController')
const {bookTable} = require('../controllers/bookingController')

const router = express.Router()
router.put('/edit/:id',updateTable)
router.get('/',getTables)
router.post('/',createTable)
router.post('/book',bookTable)


module.exports = router