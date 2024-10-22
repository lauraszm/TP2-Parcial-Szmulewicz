import TransactionsFSModel from "./DAO/transactions.model.fs.js";
import TransactionsMemModel from "./DAO/transactions.model.mem.js";

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new TransactionsMemModel()
            case "FS":
                console.log("Persistiendo en la memoria FS")
                return new TransactionsFSModel()
            default:
                console.log("Persistiendo en la memoria del servidor - Opcion por default")
                return new TransactionsMemModel()
        }
    }
}

export default Factory