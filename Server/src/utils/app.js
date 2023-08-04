const express = require('express')
const server = express()
const router =require('../../router')
const cors =require('cors')
server.use(cors())

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next(); //middlerware 
 });

 server.use(express.json())
 server.use('/rickandmorty', router)

 module.exports = server