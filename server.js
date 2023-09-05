const express = require('express')

const app = express();

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars')

// express-handlebars
const expresshbs = require('express-handlebars')

app.engine('handlebars', expresshbs.engine(
    {
        defaultLayout : 'main' , 
        handlebars : allowInsecurePrototypeAccess(Handlebars)
    }
));
app.set('view engine', 'handlebars');
app.set('views', './views');

// importing the DB 
const db = require('./models/db')
//calling the function || starting the DB
db();

const PORT = 3000;


//Middleware to read the data from POSTMAN
app.use(express.json());
app.use(express.urlencoded({extended : false}))

// importing the employeeController
app.use('/employee' , require('./controllers/employeeController'))

app.listen(PORT , () => {
    console.log(`Server Started at ${PORT}`);
})

// Continue from 32:09