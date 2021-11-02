const express = require('express')
const cors = require('cors')
const path = require('path')
const Rollbar = require('rollbar')

var rollbar = new Rollbar({
  accessToken: '141762b8a510497c802e7f2c1e60b5a6',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
    rollbar.info('html file served successfully')
})

app.get('/style', (req,res) =>{
    res.sendFile(path.join(__dirname, '../client/style.css'))
})

app.get('/main', (req,res) =>{
    res.sendFile(path.join(__dirname, '../client/main.js'))
})


app.use(rollbar.errorHandler())

const port = process.env.PORT || 4545

app.listen(port, console.log(`Server is running on ${port}`))