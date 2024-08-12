const express = require('express')

const app = express()

app.get('/', (request, response)=> {
    return response.status(200).send('Hellow BackEnd')
})


app.listen(3000, 'localhost', ()=>{
    console.log("Servidor executando em http:/localhost:3000")
})