const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get('/',function(req,res){
    res.send("Olá Mundo")
})

app.get('/msg',function(req,res){
    res.send("Está mensagem é automática!")
})

app.get('/sobre',function(req,res){
    res.send("Está página está sendo desenvolvida por Marcos Gabriel!")
})

app.listen(3000,function(){
    console.log("Conexão inicializada")
})
