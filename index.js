const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/',function(req,res){
    res.send("Olá Mundo")
})

app.get('/mensagem',function(req,res){
    res.send("Está mensagem é automática!")
})

app.listen(3000,function(){
    console.log("Conexão inicializada")
})