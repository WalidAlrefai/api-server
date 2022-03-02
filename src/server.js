'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
// const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');
const foodRoutes = require('./routes/food')
const clothesRoutes = require('./routes/clothes')

app.use(express.json()); 
app.use(cors()); 
// app.use(logger);
// app.use(validator);
app.use(foodRoutes);
app.use(clothesRoutes);

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.get('/',(req,res)=>{
    res.send('server is alive')
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}