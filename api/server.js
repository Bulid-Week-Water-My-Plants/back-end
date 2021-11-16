const express = require('express')

const userRouter = require('./users/users-router')

const server = express()
server.user(express.json())

server.use('/api/users', usersRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message, 
        stack: err.stack,
    })
})

module.exports = server;