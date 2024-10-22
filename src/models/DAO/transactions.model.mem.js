class TransactionsMemModel {
    constructor(){
        this.transactions = [
            {id: 1, tipo: "retiro", monto: 1000, destinatario: "Juan Perez"},
            {id: 2, tipo: "deposito", monto: 3000, destinatario: "Luisa Gonzalez"},
        ]
    }

    addNewTransaction = async(transaction) => {
        if(this.transactions.length === 0){
            transaction.id = 1
        } else {
            transaction.id = this.transactions[this.transactions.length -1].id + 1
        }
        this.transactions.push(transaction)
        return transaction
    }

    getAllTransactions = async() => {
        const allTransactions = await this.transactions
        if(allTransactions.length > 0){
            return allTransactions
        } else {
            return "No hay transacciones registradas"
        }
    }

    getAmountOfTransactions = async() => {
        const amount = this.transactions.length
        return `Cantidad de transacciones en cuenta: ${amount}`
    }

    deleteTransaction = async(id) => {
        const indexToDelete = this.transactions.findIndex(t => t.id == id)
        if(indexToDelete === -1){
            return `No existe una transaccion con la Id ${id}`
        } else {
            this.transactions.splice(indexToDelete, 1)
            return `La transaccion con el ID ${id} fue eliminado exitosamente`
        }
    }
}

export default TransactionsMemModel