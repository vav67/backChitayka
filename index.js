//const express = require('express')
import express from "express"
const app = express()
const port = 4000


//const mongoose = require("mongoose")
import mongoose from "mongoose"

import dotenv from "dotenv"// для каталога .env
//const dotenv = require("dotenv")
 dotenv.config()

// используем экспорт по умолчан, поэтому называем как хотим
// и файл обязат с расширением

//const pictRouter = require('./routes/pictRouter')
 import  pictRouter  from './routes/pictRouter.js'
//const testRouter = require('./routes/testRouter')
 import testRouter   from './routes/testRouter.js'
//const slovoRouter= require('./routes/slovoRouter')
 import slovoRouter  from  './routes/slovoRouter.js'   


//--------соединение с бд -------------------
const connect = async () =>{
  try{
  // теперь бд booking
  await mongoose.connect( process.env.MONGO_URL)
   //.then(()=> console.log("Соединение с бд успешно!") )
   console.log("Соединение с бд успешно!") 
  }
   catch{(err) =>{console.log("бд ошибка=", err)} }
  }
  mongoose.connection.on("connected", ()=>{
      console.log("mongoDB  connected!")
  })
  mongoose.connection.on("disconnected", ()=>{
      //но будет пытаться подключиться к бд снова и снова
      console.log("mongoDB  disconnected!")
  })





//---------------------------------



app.use(express.json()) //можем передать любой файл json

// app.get('/', (req, res) => {   res.send('Hel ') })
 
  app.use('/pict', pictRouter)
 app.use('/test', testRouter)
 app.use( '/slovo', slovoRouter)

app.listen(port, () => {
  connect() // соединение с бд , без  коннекта с бд не смысла дальше
  console.log(`Example app listening on port ${port}`)
})