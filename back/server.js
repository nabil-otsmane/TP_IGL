const express = require('express')
const mongoose = require('mongoose')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

mongoose.connect('mongodb://localhost/TP_IGL', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', error => console.error(error))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)