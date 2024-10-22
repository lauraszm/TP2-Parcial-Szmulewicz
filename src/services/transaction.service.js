import Factory from "../models/Factory.js";

class TransactionsService{
    constructor(){
        this.model = Factory.get("FS")
        //this.model = Factory.get("MEM")
    }

    addNewTransaction = async(transaction) => {
        return await this.model.addNewTransaction(transaction)
    }

    getAllTransactions = async() => {
        return await this.model.getAllTransactions()
    }

    getAmountOfTransactions = async() => {
        return await this.model.getAmountOfTransactions()
    }

    deleteTransaction = async(id) => {
        return await this.model.deleteTransaction(id)
    }
}

export default TransactionsService