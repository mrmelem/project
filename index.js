const express = require("express")
const app = express()
app.use(require("cors")())
const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    return res.send("Bem vindo")
})

app.post('/', (req,res)=>{
    return res.send("Olá mundo")
})

app.listen(PORT, ()=>{
    console.log("Servidor online")
})