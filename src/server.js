const express = require('express') // common js
// import express from 'express' // es modules

const path = require('path')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 6969
const hostname = process.env.HOST_NAME || 'localhost'

// config view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// config static file
app.use(express.static(path.join(__dirname, 'public')))


// declare routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World !</h1>')
})
app.get('/sample', (req, res) => {
    res.render('sample.ejs')
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})