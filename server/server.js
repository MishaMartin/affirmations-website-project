const express = require('express')

const app = express()

app.use(express.json())

const ctrl = require("./controller.js")

//endpoints

const port = process.env.PORT || 4545

app.listen(port, console.log(`Server is running on ${port}`))