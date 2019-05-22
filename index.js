require('dotenv').config()
const http = require('http')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')

const app = express()
const PORT = process.env.PORT
 
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/login', (req, res, next) => {
  res.cookie('auth', '123', {
    expires: new Date(Date.now() + 10000000)
  }).end()
})

app.use('/healthcheck', (req, res) => res.send('alive!'))

http
  .createServer(app)
  .listen(PORT, () => console.log(`Running on port ${PORT}`))
