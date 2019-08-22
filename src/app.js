const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const moment = require('moment');
const myConnection = require('express-myconnection');

const app = express();
moment().format();
//importing routes
const homeRoutes = require('./routes/home');
const customerRoutes = require('./routes/customer');
const controlRoutes = require('./routes/control');

//SETTINGS

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('views/customers', path.join(__dirname, 'views/customers'));
app.set('views/control', path.join(__dirname, 'views/control'));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'bdhitzone'

}, 'single'));

app.use(express.urlencoded({extended: false}));

//ROUTES
app.use('/', homeRoutes);
app.use('/customers', customerRoutes);
app.use('/control', controlRoutes);

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//START SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});