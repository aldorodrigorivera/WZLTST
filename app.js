const express = require('express');
const bodyParser = require('body-parser');

// Routes
const main = require('./routes/index');

// App Configuration
const port = 1212;
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Route configuration
app.use('/', main)

// PUT SPECIAL ATTENTION AT THE FOLLOWING LINE 🤓
app.listen(port,() => {
    console.log(` ▶︎ App running at port::${port} 💻 `)
})