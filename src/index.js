import express from 'express'
import TransactionsRouter from './routes/transactions.route.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", new TransactionsRouter().start())

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
app.on("error", (error) => {
    console.log(`Error: ${error}`)
})