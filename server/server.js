const express = require('express')
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

const ctrl = require("./controller.js")

//endpoints

app.use(rollbar.errorHandler())

const port = process.env.PORT || 4545

app.listen(port, console.log(`Server is running on ${port}`))