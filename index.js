const express = require(express)
const app = express()
app.use(require(cors)())
const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    return res.send("Olá mundo")
})

app.listen(pot, ()=>{
    console.log("Servidor online")
})