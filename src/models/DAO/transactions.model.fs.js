import fs from 'fs'

class TransactionsFSModel {
    constructor(){
        this.transactions = "transactions.json"
    }

    addNewTransaction = async(transaction) => {
        const allTransactions = await fs.promises.readFile(this.transactions, "utf-8")
        const allTransactionsArr = JSON.parse(allTransactions)
        if(allTransactionsArr.length === 0){
            transaction.id = 1
        } else {
            transaction.id = allTransactionsArr[allTransactionsArr.length -1].id + 1
        }
        allTransactionsArr.push(transaction)
        const allTransactionsString = JSON.stringify(allTransactionsArr)
        await fs.promises.writeFile(this.transactions, allTransactionsString)
        return transaction
    }

    getAllTransactions = async() => {
        const allTransactions = await fs.promises.readFile(this.transactions, "utf-8")
        if(allTransactions.length > 0){
            return JSON.parse(allTransactions)
        } else {
            return "No hay transacciones registradas"
        }
    }

    getAmountOfTransactions = async() => {
        const allTransactions = await fs.promises.readFile(this.transactions, "utf-8")
        const allTransactionsArr = JSON.parse(allTransactions)
        const amount = allTransactionsArr.length
        return `Cantidad de transacciones en cuenta: ${amount}`
    }

    deleteTransaction = async(id) => {
        const allTransactions = await fs.promises.readFile(this.transactions, "utf-8")
        const allTransactionsArr = JSON.parse(allTransactions)
        const indexToDelete = allTransactionsArr.findIndex(t => t.id == id)
        if(indexToDelete === -1){
            return `No existe una transaccion con la Id ${id}`
        } else {
            allTransactionsArr.splice(indexToDelete, 1)
            const allTransactionsString = JSON.stringify(allTransactionsArr)
            await fs.promises.writeFile(this.transactions, allTransactionsString)
            return `La transaccion con el ID ${id} fue eliminado exitosamente`
        }
    }
}

export default TransactionsFSModel