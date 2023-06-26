const express = require('express')
const app = express()
const port = 4000
const pictRouter = require('./routes/pictRouter')
const testRouter = require('./routes/testRouter')


// app.get('/', (req, res) => {   res.send('Hel ') })
 
app.use('/pict', pictRouter)
app.use('/test', testRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})