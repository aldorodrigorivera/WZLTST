const express = require('express');
const route = express.Router();
const middleware = require('../middleware/auth');
const controller = require('../controller/index');

route.get('/', middleware, controller.getRecords);
route.post('/insert', middleware, controller.insertRecord);
route.delete('/delete', middleware, controller.deleteRecord);


module.exports = route