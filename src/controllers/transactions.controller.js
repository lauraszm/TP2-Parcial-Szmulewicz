import TransactionsService from '../services/transaction.service.js'

class TransactionController{
    constructor(){
        this.service = new TransactionsService()
    }

    addNewTransaction = async(req,res) => {
        const transaction = req.body
        if(JSON.stringify(transaction) === "{}"){
            res.status(400).send("Debe incluir una transaccion")
        } else {
            const newTransaction = await this.service.addNewTransaction(transaction)
            res.status(200).send(newTransaction)
        }
    }

    getAllTransactions = async(req,res) => {
        const allTransactions = await this.service.getAllTransactions()
        res.status(200).send(allTransactions)
    }

    getAmountOfTransactions = async(req,res) => {
        const amount = await this.service.getAmountOfTransactions()
        res.status(200).send(amount)
    }

    deleteTransaction = async(req,res) => {
        const { id } = req.params
        if(id == null){
            res.status(400).send("Falta ID de transaccion a eliminar")
        } else {
            const deleteTrans = await this.service.deleteTransaction(id)
            res.status(200).send(deleteTrans)
        }
    }
}

export default TransactionController