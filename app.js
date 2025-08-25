const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs')
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;
const userRoutes = require('./routes/users.js');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDoc = YAML.load('./swagger.yaml');
const rateLimit = require('express-rate-limit');



app.set('views', './views');
app.set('view engine', 'ejs');

//rate limiter
const fixedWindowLimiter = rateLimit({
    windowMs: 1 * 15 * 1000, // 15 seconds
    max: 10, 
    message: "Too many requests, please try gain later."
});

app.use(express.static('public'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
app.use(fixedWindowLimiter);

app.use(userRoutes);



mongoose.connect(uri).then(
async ()=> {

    console.log('Connected to MongoDB Server');

    app.listen(PORT, () => {
        console.log(`Connected to port ${PORT}`)
    });
}).catch((err) =>{ console.log(`error: ${err}`)});
