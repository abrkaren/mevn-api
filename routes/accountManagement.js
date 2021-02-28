const express = require('express')
const controller = require('../controllers/accountManagement')
const router = express.Router()

router.get('/ping', controller.healhcheck)
router.post('/amount', controller.createsTransaction)
router.post('/transactions', controller.getTransactions)
router.get('/transaction/:id', controller.getTransactionById)
router.get('/balance/:id', controller.getAccountBalance)
router.get('/max_transaction_volume', controller.getMaxTransactionVolume)

module.exports = router
