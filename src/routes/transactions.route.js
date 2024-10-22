import express from 'express'
import TransactionController from '../controllers/transactions.controller.js'

class TransactionsRouter{
    constructor(){
        this.controller = new TransactionController()
        this.router = new express.Router()
    }

    start(){
        this.router.post("/newTransaction", this.controller.addNewTransaction)
        this.router.get("/transactions", this.controller.getAllTransactions)
        this.router.get("/transactions/amount", this.controller.getAmountOfTransactions)
        this.router.delete("/deleteTransaction/:id", this.controller.deleteTransaction)
        return this.router
    }
}

export default TransactionsRouter