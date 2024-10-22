import TransactionsMemModel from "./DAO/transactions.model.mem.js";

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new TransactionsMemModel()
        
            default:
                console.log("Persistiendo en la memoria del servidor - Opcion por default")
                return new TransactionsMemModel()
        }
    }
}

export default Factory